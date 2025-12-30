# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 기반 한국어 스타터킷. shadcn/ui, Tailwind CSS, React Hook Form, Zod를 활용한 모던 웹 애플리케이션 템플릿.

## 개발 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm build

# 프로덕션 서버 시작
npm start

# 린트 실행
npm run lint
```

## 아키텍처

### 레이아웃 구조

전역 레이아웃(`app/layout.tsx`)은 다음 구조를 따릅니다:
- `ThemeProvider`로 전체 앱을 감싸 라이트/다크 모드 지원
- `Header` - 고정 상단 네비게이션 (데스크톱/모바일 반응형)
- `main` - 페이지 컨텐츠
- `Footer` - 하단 푸터

### 설정 중앙화

`lib/constants.ts`에서 모든 사이트 설정 관리:
- `siteConfig`: 사이트 메타데이터, 소셜 링크
- `navigationLinks`: 메인 네비게이션 메뉴
- `features`: 홈페이지 기능 카드 데이터
- `footerLinks`: 푸터 링크 그룹
- `docNavItems`: 문서 네비게이션 구조

**중요**: 새 네비게이션 항목이나 사이트 정보 변경 시 이 파일을 수정하세요.

### 타입 시스템

`lib/types.ts`에서 공통 타입 정의:
- `User`, `Post`: API 엔티티 타입
- `ApiResponse<T>`: 표준 API 응답 래퍼
- `PaginatedResponse<T>`: 페이지네이션 응답

API 라우트는 일관된 응답 형식을 유지합니다:
```typescript
{
  success: boolean,
  data: T,
  message?: string
}
```

### 컴포넌트 구조

```
components/
├── ui/              # shadcn/ui 기본 컴포넌트 (button, card, input 등)
├── layout/          # 레이아웃 컴포넌트
│   ├── header.tsx   # 헤더 (로고, 네비게이션, 테마 토글)
│   ├── footer.tsx   # 푸터
│   ├── main-nav.tsx # 데스크톱 네비게이션
│   ├── mobile-nav.tsx # 모바일 시트 네비게이션
│   └── theme-toggle.tsx # 라이트/다크 모드 전환
├── hero/            # 홈페이지 히어로 섹션
├── docs/            # 문서 페이지 컴포넌트
└── examples/        # 예제 컴포넌트 (카테고리별 구성)
    ├── 01-components/  # UI 컴포넌트 예제
    ├── 02-forms/       # 폼 처리 예제
    ├── 03-dialogs/     # 모달/시트 예제
    └── 04-data/        # 데이터 패칭 예제
```

### 폼 처리 패턴

React Hook Form + Zod 조합을 사용합니다:

1. Zod 스키마로 유효성 검사 규칙 정의
2. `zodResolver`로 스키마를 React Hook Form에 연결
3. `z.infer<typeof schema>`로 TypeScript 타입 자동 추론

예제: `components/examples/02-forms/validation-form-example.tsx`

### 데이터 패칭 패턴

- **서버 컴포넌트**: `async` 함수로 직접 fetch (추천)
- **클라이언트 컴포넌트**: `useEffect` + `useState`로 상태 관리
- **API 라우트**: `app/api/*` (목 데이터: `app/api/mock-data.ts`)

예제: `components/examples/04-data/`

### 테마 시스템

`next-themes` 기반:
- Provider: `providers/theme-provider.tsx`
- 토글 컴포넌트: `components/layout/theme-toggle.tsx`
- 테마: `light`, `dark`, `system` (기본값)
- `suppressHydrationWarning` 필수 (`app/layout.tsx`의 `<html>` 태그)

### 스타일링 규칙

- Tailwind CSS v4 사용
- shadcn/ui 컴포넌트는 `cn()` 유틸리티로 클래스 병합
- 커스텀 애니메이션은 `app/globals.css`에 키프레임 정의
- 반응형: 모바일 우선 (`md:`, `lg:` 브레이크포인트)

### 이미지 처리

`next.config.ts`에서 Unsplash 도메인 허용:
```typescript
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" }
  ]
}
```

외부 이미지 사용 시 `remotePatterns`에 도메인 추가 필요.

## 페이지 구조

- `/` - 히어로 섹션 (타이핑 효과, 파티클 배경, 기능 카드)
- `/examples` - 탭 기반 컴포넌트 예제 모음
- `/docs` - 문서 (사이드바 네비게이션)
- `/api/*` - REST API 엔드포인트

## 주의사항

- 모든 문자열은 한국어로 작성
- 새 컴포넌트 추가 시 `components/examples/` 구조 참고
- API 응답은 `lib/types.ts`의 `ApiResponse<T>` 형식 준수
- 테마 관련 컴포넌트는 `"use client"` 지시어 필수
