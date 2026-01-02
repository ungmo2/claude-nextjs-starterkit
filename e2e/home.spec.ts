import { test, expect } from '@playwright/test'

test.describe('홈페이지', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('페이지가 정상적으로 로드되어야 함', async ({ page }) => {
    // 페이지 타이틀 확인
    await expect(page).toHaveTitle(/Next.js/)

    // 메인 콘텐츠 확인
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
  })

  test('네비게이션 링크가 작동해야 함', async ({ page }) => {
    // 예제 링크 클릭
    await page.getByRole('link', { name: '예제' }).click()

    // 예제 페이지로 이동 확인
    await expect(page).toHaveURL(/\/examples/)
    await expect(page.locator('h1')).toContainText('예제')
  })

  test('모바일 환경에서 헤더가 렌더링되어야 함', async ({ page }) => {
    // 모바일 뷰포트
    await page.setViewportSize({ width: 375, height: 667 })

    // 헤더가 보이는지 확인
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // 로고가 보이는지 확인 (헤더 내의 첫 번째 로고 링크)
    const logo = page.locator('header a[href="/"]').first()
    await expect(logo).toBeVisible()
  })
})
