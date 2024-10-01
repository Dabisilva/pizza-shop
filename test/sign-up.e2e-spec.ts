import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Nome do restaurante').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Telefone').fill('123812641264')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Restaurante cadastrado com sucesso')
  await expect(toast).toBeVisible()

  await page.waitForTimeout(1000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Nome do restaurante').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Telefone').fill('123812641264')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Erro ao cadastrar restaurante')
  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()
  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(1000)
})
