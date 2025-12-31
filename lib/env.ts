/**
 * 환경 변수 유틸리티
 *
 * 환경 변수의 타입 안전성과 검증을 제공합니다.
 */

/** 환경 변수 타입 정의 */
interface EnvVars {
  // 사이트 정보
  NEXT_PUBLIC_SITE_NAME: string
  NEXT_PUBLIC_SITE_DESCRIPTION: string
  NEXT_PUBLIC_SITE_URL: string

  // API
  NEXT_PUBLIC_API_URL: string

  // 소셜 링크
  NEXT_PUBLIC_GITHUB_URL: string
  NEXT_PUBLIC_TWITTER_URL: string
  NEXT_PUBLIC_LINKEDIN_URL: string

  // 연락처
  NEXT_PUBLIC_CONTACT_EMAIL: string

  // OG 이미지
  NEXT_PUBLIC_OG_IMAGE: string
}

/** 개발 환경 기본값 */
const developmentDefaults: EnvVars = {
  NEXT_PUBLIC_SITE_NAME: "Next.js Starter Kit",
  NEXT_PUBLIC_SITE_DESCRIPTION: "나만의 Next.js 스타터킷",
  NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
  NEXT_PUBLIC_API_URL: "http://localhost:3000",
  NEXT_PUBLIC_GITHUB_URL: "https://github.com/yourusername/yourproject",
  NEXT_PUBLIC_TWITTER_URL: "https://twitter.com/yourusername",
  NEXT_PUBLIC_LINKEDIN_URL: "https://linkedin.com/company/yourcompany",
  NEXT_PUBLIC_CONTACT_EMAIL: "hello@yoursite.com",
  NEXT_PUBLIC_OG_IMAGE: "/og-image.png",
}

/**
 * 환경 변수를 가져옵니다.
 * 값이 없으면 개발 환경 기본값을 사용합니다.
 */
function getEnv<K extends keyof EnvVars>(key: K): string {
  const value = process.env[key]

  // 개발 환경이면 기본값 사용
  if (process.env.NODE_ENV === "development") {
    return value || developmentDefaults[key]
  }

  // 프로덕션에서는 환경 변수 필수
  if (!value) {
    throw new Error(`환경 변수 ${key}가 설정되지 않았습니다.`)
  }

  return value
}

/** 필수 환경 변수 검증 (서버 시작 시 호출) */
export function validateEnv(): void {
  const requiredKeys: (keyof EnvVars)[] = [
    "NEXT_PUBLIC_SITE_NAME",
    "NEXT_PUBLIC_SITE_DESCRIPTION",
    "NEXT_PUBLIC_SITE_URL",
    "NEXT_PUBLIC_API_URL",
  ]

  if (process.env.NODE_ENV === "production") {
    const missingKeys = requiredKeys.filter((key) => !process.env[key])

    if (missingKeys.length > 0) {
      throw new Error(
        `다음 필수 환경 변수가 설정되지 않았습니다: ${missingKeys.join(", ")}`
      )
    }
  }
}

/** 타입 안전한 환경 변수 객체 */
export const env = {
  // 사이트 정보
  SITE_NAME: getEnv("NEXT_PUBLIC_SITE_NAME"),
  SITE_DESCRIPTION: getEnv("NEXT_PUBLIC_SITE_DESCRIPTION"),
  SITE_URL: getEnv("NEXT_PUBLIC_SITE_URL"),

  // API
  API_URL: getEnv("NEXT_PUBLIC_API_URL"),

  // 소셜 링크
  GITHUB_URL: getEnv("NEXT_PUBLIC_GITHUB_URL"),
  TWITTER_URL: getEnv("NEXT_PUBLIC_TWITTER_URL"),
  LINKEDIN_URL: getEnv("NEXT_PUBLIC_LINKEDIN_URL"),

  // 연락처
  CONTACT_EMAIL: getEnv("NEXT_PUBLIC_CONTACT_EMAIL"),

  // OG 이미지
  OG_IMAGE: getEnv("NEXT_PUBLIC_OG_IMAGE"),
} as const
