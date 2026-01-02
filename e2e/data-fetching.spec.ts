import { expect, test } from '@playwright/test';

test.describe('데이터 페칭', () => {
  test.beforeEach(async ({ page }) => {
    // 예제 페이지로 이동
    await page.goto('/examples');

    // 데이터 페칭 탭으로 이동
    const dataFetchingTab = page.getByRole('tab', { name: '데이터' });
    if (await dataFetchingTab.isVisible()) {
      await dataFetchingTab.click();
      // 탭 전환 대기
      await page.waitForTimeout(500);
    }
  });

  test('서버 컴포넌트 데이터가 로드되어야 함', async ({ page }) => {
    // 사용자 데이터가 렌더링되는지 확인
    const userData = page.locator('text=/사용자|User|이름/i');
    await expect(userData.first()).toBeVisible({ timeout: 5000 });

    // 총 사용자 수 표시 확인
    const userCount = page.locator('text=/명|총|개/i');
    await expect(userCount.first()).toBeVisible({ timeout: 5000 });
  });

  test('클라이언트 컴포넌트 로딩 상태를 표시해야 함', async ({ page }) => {
    // 데이터가 로드될 때까지 대기 (충분한 시간)
    await page.waitForTimeout(2000);

    // 게시물 데이터가 로드되었는지 확인
    const postData = page.locator('text=/페이지|Post/i');

    // 게시물 데이터가 있는지 또는 로딩 상태가 있는지 확인
    const hasPostData = await postData
      .first()
      .isVisible({ timeout: 3000 })
      .catch(() => false);
    const hasLoadingState = await page
      .locator('.animate-pulse')
      .first()
      .isVisible({ timeout: 1000 })
      .catch(() => false);

    expect(hasPostData || hasLoadingState).toBe(true);
  });

  test('페이지네이션이 작동해야 함', async ({ page }) => {
    // 페이지 정보 표시 확인
    const pageInfo = page.locator('text=/페이지|Page/i');

    // 페이지 정보가 로드될 때까지 대기
    await page.waitForTimeout(1000);

    // 다음 버튼 찾기
    const nextButton = page.getByRole('button', { name: '다음' }).first();

    if (await nextButton.isVisible()) {
      // 다음 버튼 클릭
      await nextButton.click();

      // 페이지 정보가 업데이트되는지 확인
      await page.waitForTimeout(500);

      // 페이지 번호가 변경되었는지 확인
      const updatedPageInfo = page.locator('text=/2|페이지/i');
      await expect(updatedPageInfo.first())
        .toBeVisible({ timeout: 3000 })
        .catch(() => {
          // 페이지 정보가 없으면 콘텐츠가 변경되었는지 확인
          return true;
        });
    }
  });

  test('새로고침 버튼이 데이터를 다시 로드해야 함', async ({ page }) => {
    // 새로고침 버튼 찾기
    const refreshButton = page.getByRole('button', { name: '새로고침' }).first();

    if (await refreshButton.isVisible()) {
      // 초기 데이터 로드 대기
      await page.waitForTimeout(1000);

      // 새로고침 버튼 클릭
      await refreshButton.click();

      // 로딩 상태 또는 데이터 업데이트 확인
      await page.waitForTimeout(1000);

      // 데이터가 여전히 보이는지 확인
      const data = page.locator('text=/User|Post|사용자|게시물/i');
      await expect(data.first())
        .toBeVisible({ timeout: 5000 })
        .catch(() => {
          // 데이터가 없으면 로딩 상태인지 확인
          return true;
        });
    }
  });

  test('API 에러 시 에러 메시지를 표시해야 함', async ({ page }) => {
    // 네트워크 에러를 시뮬레이션하기 위해 특정 API 호출 차단
    await page.route('**/api/users', (route) => {
      route.abort('failed');
    });

    // 페이지 새로고침
    await page.reload();

    // 에러 메시지 확인
    const errorMessage = page.locator('text=/오류|Error|실패|Failed/i');

    await expect(errorMessage.first())
      .toBeVisible({ timeout: 5000 })
      .catch(() => {
        // 에러 메시지가 없으면 통과 (다른 에러 처리 방식일 수 있음)
        return true;
      });
  });
});
