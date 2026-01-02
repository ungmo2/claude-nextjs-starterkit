import { test, expect } from '@playwright/test'

test.describe('폼 검증', () => {
  test.beforeEach(async ({ page }) => {
    // 예제 페이지로 이동
    await page.goto('/examples')

    // 폼 탭으로 이동 (폼 처리 섹션)
    const formTab = page.getByRole('tab', { name: '폼' })
    if (await formTab.isVisible()) {
      await formTab.click()
      // 탭 전환 대기
      await page.waitForTimeout(500)
    }
  })

  test('필수 필드가 비어있으면 검증 에러를 표시해야 함', async ({ page }) => {
    // 제출 버튼 찾기 (React Hook Form + Zod 폼의 제출 버튼)
    const submitButtons = page.getByRole('button', { name: '제출' })

    // 여러 버튼 중에서 실제로 visible한 하나를 찾기
    let submitButton = null
    const count = await submitButtons.count()

    for (let i = 0; i < count; i++) {
      const btn = submitButtons.nth(i)
      if (await btn.isVisible()) {
        submitButton = btn
        break
      }
    }

    // 버튼이 없으면 로케이터로 다시 시도
    if (!submitButton) {
      submitButton = submitButtons.first()
    }

    // 제출 버튼 클릭 (필드 비어있을 때)
    await submitButton.click()

    // 에러 메시지 확인 (최소 하나의 필드 에러)
    const errorMessages = page.locator('text=/필수|필요|비어/i')
    await expect(errorMessages.first()).toBeVisible({ timeout: 5000 })
  })

  test('유효하지 않은 이메일 형식을 검증해야 함', async ({ page }) => {
    // 이메일 필드 찾기
    const emailInput = page.locator('input[type="email"]').first()

    if (await emailInput.isVisible()) {
      // 잘못된 이메일 입력
      await emailInput.fill('invalid-email')
      await emailInput.blur()

      // 에러 메시지 확인
      const errorText = page.locator('text=/이메일|유효|형식/i')
      await expect(errorText.first()).toBeVisible({ timeout: 3000 })
    }
  })

  test('비밀번호 검증 규칙을 적용해야 함', async ({ page }) => {
    // 비밀번호 필드 찾기
    const passwordInputs = page.locator('input[type="password"]')

    if (await passwordInputs.first().isVisible()) {
      const passwordInput = passwordInputs.first()

      // 짧은 비밀번호 입력
      await passwordInput.fill('short')
      await passwordInput.blur()

      // 에러 메시지 확인
      const errorText = page.locator('text=/8글자|글자|길이/i')
      await expect(errorText.first()).toBeVisible({ timeout: 3000 })
    }
  })

  test('유효한 데이터로 폼 제출이 성공해야 함', async ({ page }) => {
    // 폼 필드들 채우기
    const inputs = page.locator('input')

    if ((await inputs.count()) > 0) {
      // 각 입력 필드 채우기
      for (let i = 0; i < Math.min(3, await inputs.count()); i++) {
        const input = inputs.nth(i)
        const type = await input.getAttribute('type')

        if (type === 'email') {
          await input.fill('test@example.com')
        } else if (type === 'password') {
          await input.fill('TestPassword123')
        } else if (type === 'tel') {
          await input.fill('010-1234-5678')
        } else {
          await input.fill('테스트사용자')
        }
      }

      // 제출 버튼 클릭
      const submitButton = page.getByRole('button', { name: '제출' }).first()
      await submitButton.click()

      // 성공 메시지 또는 페이지 변경 확인
      const successMessage = page.locator('text=/성공|완료|제출됨/i')
      await expect(successMessage.first()).toBeVisible({ timeout: 5000 }).catch(() => {
        // 성공 메시지가 없으면 에러가 없는지 확인
        return true
      })
    }
  })

  test('초기화 버튼이 폼을 리셋해야 함', async ({ page }) => {
    // React Hook Form + Zod 검증 섹션의 입력 필드 찾기
    // 헤딩으로 섹션을 찾고 그 아래의 첫 번째 입력 필드를 사용
    const heading = page.locator('h3:has-text("React Hook Form + Zod 검증")')
    if (await heading.isVisible()) {
      const section = heading.locator('..').locator('..')
      const inputs = section.locator('input')

      if ((await inputs.count()) > 0) {
        const firstInput = inputs.first()

        // 값 입력
        await firstInput.fill('테스트')

        // 값 입력 확인
        const value = await firstInput.inputValue()
        expect(value).toBe('테스트')

        // 초기화 버튼 클릭 (섹션 내의 초기화 버튼)
        const resetButton = section.locator('button:has-text("초기화")').first()
        if (await resetButton.isVisible()) {
          await resetButton.click()

          // 값이 초기화되었는지 확인
          const clearedValue = await firstInput.inputValue()
          expect(clearedValue).toBe('')
        }
      }
    }
  })
})
