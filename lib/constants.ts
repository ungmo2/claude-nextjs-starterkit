import {
  Zap,
  Palette,
  Moon,
  Smartphone,
  LucideIcon,
} from "lucide-react"
import { env } from "./env"

// 사이트 설정
export const siteConfig = {
  name: env.SITE_NAME,
  description: env.SITE_DESCRIPTION,
  url: env.SITE_URL,
  ogImage: env.OG_IMAGE,
  links: {
    github: env.GITHUB_URL,
    twitter: env.TWITTER_URL,
    linkedin: env.LINKEDIN_URL,
    email: `mailto:${env.CONTACT_EMAIL}`,
  },
}

// 네비게이션 링크
export const navigationLinks = [
  { href: "/", label: "홈" },
  { href: "/examples", label: "예제" },
  { href: "/docs", label: "문서" },
]

// 주요 특징
interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: "빠른 개발",
    description:
      "Next.js 16과 TypeScript로 타입 안전한 개발 환경을 제공합니다.",
  },
  {
    icon: Palette,
    title: "모던 UI",
    description:
      "shadcn/ui 컴포넌트로 아름답고 일관된 디자인을 구현하세요.",
  },
  {
    icon: Moon,
    title: "다크모드",
    description:
      "완벽하게 구현된 라이트/다크 테마 전환 기능을 제공합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형",
    description:
      "모바일부터 데스크톱까지 모든 기기에서 완벽하게 동작합니다.",
  },
]

// 푸터 링크
export const footerLinks = {
  제품: [
    { label: "기능", href: "#" },
    { label: "가격", href: "#" },
    { label: "문서", href: "/docs" },
    { label: "로드맵", href: "#" },
  ],
  리소스: [
    { label: "블로그", href: "#" },
    { label: "커뮤니티", href: "#" },
    { label: "가이드", href: "/docs" },
    { label: "API 참조", href: "#" },
  ],
  회사: [
    { label: "소개", href: "#" },
    { label: "채용", href: "#" },
    { label: "문의", href: "#" },
    { label: "상태", href: "#" },
  ],
  법적: [
    { label: "개인정보 보호정책", href: "#" },
    { label: "이용약관", href: "#" },
    { label: "쿠키", href: "#" },
  ],
}

// 문서 네비게이션
export const docNavItems = [
  {
    title: "시작하기",
    items: [
      { label: "소개", href: "/docs" },
      { label: "설치", href: "/docs" },
      { label: "설정", href: "/docs" },
    ],
  },
  {
    title: "컴포넌트",
    items: [
      { label: "개요", href: "/docs" },
      { label: "Button", href: "/docs" },
      { label: "Card", href: "/docs" },
      { label: "Input", href: "/docs" },
    ],
  },
  {
    title: "스타일링",
    items: [
      { label: "Tailwind CSS", href: "/docs" },
      { label: "테마 커스터마이징", href: "/docs" },
      { label: "다크모드", href: "/docs" },
    ],
  },
  {
    title: "배포",
    items: [
      { label: "Vercel", href: "/docs" },
      { label: "자체 호스팅", href: "/docs" },
      { label: "최적화", href: "/docs" },
    ],
  },
]
