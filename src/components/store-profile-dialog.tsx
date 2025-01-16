import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getManegedRestaurant } from '@/api/get-maneged-restaurant'
import { updateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(3),
  description: z.string().nullable(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const client = useQueryClient()

  const { data: manegedRestaurant } = useQuery({
    queryKey: ['maneged-restaurant'],
    queryFn: getManegedRestaurant,
    staleTime: Infinity,
  })

  function updateManegedRestaurantCache({
    name,
    description,
  }: StoreProfileSchema) {
    const cached = client.getQueryData(['maneged-restaurant'])
    if (cached) {
      client.setQueryData(['maneged-restaurant'], {
        ...cached,
        name,
        description,
      })
    }
    return { previusProfile: cached as StoreProfileSchema }
  }

  const { mutateAsync: updateProfileAyncFn } = useMutation({
    mutationFn: updateProfile,
    onMutate: updateManegedRestaurantCache,
    onError(_, __, context) {
      if (context?.previusProfile) {
        updateManegedRestaurantCache(context?.previusProfile)
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: manegedRestaurant?.name ?? '',
      description: manegedRestaurant?.description ?? '',
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      // @ts-expect-error-error
      await updateProfileAyncFn(data)

      toast.success('Perfil Atualizado com sucesso')
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>Atualize as informações</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
