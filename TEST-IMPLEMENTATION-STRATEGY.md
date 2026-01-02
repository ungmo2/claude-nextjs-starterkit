# Next.js 스타터킷 테스트 시스템 구현 계획

## 개요
최근 변경된 파일들 (lib/env.ts, lib/constants.ts, app/layout.tsx, server-data-example.tsx)에 대한 포괄적인 테스트 시스템을 구축합니다.

## 1. 테스트 프레임워크 선정

### 단위/통합 테스트: **Vitest** ✅
- Next.js 16과 완벽 호환
- Jest보다 10배 빠른 실행 속도
- TypeScript 네이티브 지원
- ESM 모듈 완벽 지원

### React 컴포넌트 테스트: **Testing Library** ✅
- @testing-library/react + @testing-library/user-event
- shadcn/ui 컴포넌트 테스트 지원
- 사용자 관점 테스트

### E2E 테스트: **Playwright** ✅
- Next.js 공식 권장 도구
- 이미 .mcp.json에 설정 존재
- 크로스 브라우저 지원

## 2. 설치할 패키지

```bash
npm install -D vitest @vitest/ui @vitest/coverage-v8 jsdom
npm install -D @testing-library/react @testing-library/user-event @testing-library/jest-dom
npm install -D @playwright/test
npm install -D msw
```

## 3. 핵심 구현 파일 (우선순위)

### Phase 1: 기반 설정
1. **vitest.config.ts** - Vitest 설정 (jsdom 환경, coverage, alias)
2. **lib/test/setup.ts** - 글로벌 테스트 설정 (env 모킹, cleanup)
3. **lib/test/msw-handlers.ts** - API 모킹 핸들러
4. **lib/test/msw-server.ts** - MSW 서버 설정
5. **package.json** - 테스트 스크립트 추가

### Phase 2: 유틸리티 테스트 (최우선)
6. **lib/env.test.ts** - 환경 변수 시스템 테스트 (9개 케이스)
   - 개발/프로덕션 환경 분기
   - 기본값 제공 및 검증 로직
   - validateEnv() 함수

7. **lib/constants.test.ts** - 설정 구조 검증 (15개 케이스)
   - siteConfig, navigationLinks 구조
   - URL 형식 검증
   - 한국어 문자열 검증

### Phase 3: 컴포넌트 테스트
8. **components/examples/02-forms/validation-form-example.test.tsx** (8개 케이스)
   - 필수 필드, 이메일, 비밀번호 검증
   - 폼 제출 및 초기화

9. **components/examples/04-data/server-data-example.test.tsx** (3개 케이스)
   - 서버 컴포넌트 데이터 페칭
   - 에러 처리

10. **components/examples/04-data/client-data-example.test.tsx** (4개 케이스)
    - 로딩 상태, 페이지네이션

### Phase 4: API 라우트 테스트
11. **app/api/users/route.test.ts** (3개 케이스)
    - GET /api/users 응답 검증
    - 데이터 구조 확인

### Phase 5: E2E 테스트
12. **playwright.config.ts** - Playwright 설정
13. **e2e/home.spec.ts** - 홈페이지 시나리오 (3개)
14. **e2e/forms.spec.ts** - 폼 검증 시나리오 (3개)
15. **e2e/data-fetching.spec.ts** - 데이터 페칭 시나리오 (2개)

## 4. package.json 스크립트

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:watch": "vitest --watch",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:all": "npm run test && npm run test:e2e"
  }
}
```

## 5. 주요 테스트 케이스 요약

### lib/env.ts (9개)
- ✓ 개발 환경 기본값 반환
- ✓ 환경 변수 우선 사용
- ✓ 프로덕션 환경 검증 실패/성공
- ✓ 모든 필수 키 존재 여부

### lib/constants.ts (15개)
- ✓ siteConfig 필수 속성 검증
- ✓ URL/링크 형식 검증
- ✓ navigationLinks 중복 체크
- ✓ features/footerLinks 구조 검증

### ValidationFormExample (8개)
- ✓ 필수 필드 검증
- ✓ 이메일/비밀번호 형식 검증
- ✓ 폼 제출 성공/실패 시나리오

### 데이터 페칭 (7개)
- ✓ 서버 컴포넌트 async 페칭
- ✓ 클라이언트 컴포넌트 상태 관리
- ✓ API 에러 처리
- ✓ 페이지네이션 동작

### E2E (8개)
- ✓ 페이지 로드 및 네비게이션
- ✓ 테마 토글 동작
- ✓ 폼 검증 사용자 플로우
- ✓ 데이터 페칭 통합 시나리오

**총 50개 테스트 케이스**

## 6. 잠재적 문제점 및 해결 방안

### 서버 컴포넌트 테스트
- **문제**: async 서버 컴포넌트 테스트 어려움
- **해결**: await로 컴포넌트 호출 후 render, MSW로 네트워크 모킹

### 환경 변수 모킹
- **문제**: NEXT_PUBLIC_ 변수는 빌드 타임 결정
- **해결**: lib/test/setup.ts에서 vi.mock으로 env 모듈 모킹

### shadcn/ui 컴포넌트
- **문제**: Radix UI 기반 DOM 구조 복잡
- **해결**: Testing Library의 역할 기반 쿼리 (getByRole, getByLabelText)

### 테스트 격리
- **문제**: 테스트 간 상태 오염
- **해결**: afterEach에서 cleanup(), MSW resetHandlers()

## 7. 구현 순서

1. **패키지 설치** (5분)
2. **vitest.config.ts + lib/test/setup.ts** (30분)
3. **lib/env.test.ts** (1시간) - 최우선
4. **lib/constants.test.ts** (1시간)
5. **MSW 핸들러 설정** (30분)
6. **컴포넌트 테스트** (2-3시간)
7. **playwright.config.ts + E2E 테스트** (2시간)
8. **package.json 스크립트 추가** (10분)

**예상 총 소요 시간**: 1-2일

## 8. 커버리지 목표

- 전체: **80% 이상**
- lib/ 유틸리티: **90% 이상**
- components/: **70% 이상**
- app/api/: **85% 이상**

## 9. 구현 후 검증

```bash
# 단위 테스트 실행
npm run test

# 커버리지 확인
npm run test:coverage

# E2E 테스트 실행
npm run test:e2e

# 전체 테스트 실행
npm run test:all
```

---

## 핵심 파일 경로

### 수정/생성할 파일
- `vitest.config.ts`
- `playwright.config.ts`
- `lib/test/setup.ts`
- `lib/test/msw-handlers.ts`
- `lib/test/msw-server.ts`
- `lib/env.test.ts`
- `lib/constants.test.ts`
- `components/examples/02-forms/validation-form-example.test.tsx`
- `components/examples/04-data/server-data-example.test.tsx`
- `components/examples/04-data/client-data-example.test.tsx`
- `app/api/users/route.test.ts`
- `e2e/home.spec.ts`
- `e2e/forms.spec.ts`
- `e2e/data-fetching.spec.ts`
- `package.json` (스크립트 추가)

### 테스트 대상 파일
- `lib/env.ts` (최근 추가, 102줄)
- `lib/constants.ts` (최근 수정, 17줄)
- `app/layout.tsx` (메타데이터 추가, 28줄)
- `components/examples/04-data/server-data-example.tsx` (API URL 변경)
