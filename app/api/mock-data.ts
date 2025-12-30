import { User, Post } from "@/lib/types"

// Mock 사용자 데이터
export const mockUsers: User[] = [
  {
    id: 1,
    name: "김철수",
    email: "chulsu.kim@example.com",
    role: "관리자",
  },
  {
    id: 2,
    name: "이영희",
    email: "younghee.lee@example.com",
    role: "사용자",
  },
  {
    id: 3,
    name: "박민준",
    email: "minjun.park@example.com",
    role: "사용자",
  },
  {
    id: 4,
    name: "최수진",
    email: "sujin.choi@example.com",
    role: "편집자",
  },
  {
    id: 5,
    name: "정대호",
    email: "daeho.jung@example.com",
    role: "사용자",
  },
]

// Mock 게시물 데이터
export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Next.js 16 출시 소식",
    content:
      "Next.js 16.0이 새로운 기능과 성능 개선과 함께 출시되었습니다.",
    author: "김철수",
    createdAt: "2025-01-15",
  },
  {
    id: 2,
    title: "Tailwind CSS 4.0 업데이트",
    content:
      "Tailwind CSS가 버전 4.0으로 업데이트되면서 많은 새로운 기능이 추가되었습니다.",
    author: "이영희",
    createdAt: "2025-01-14",
  },
  {
    id: 3,
    title: "React 19의 새로운 기능",
    content: "React 19에서는 Server Components와 새로운 Hook들이 추가되었습니다.",
    author: "박민준",
    createdAt: "2025-01-13",
  },
  {
    id: 4,
    title: "TypeScript 5.4 출시",
    content:
      "TypeScript 5.4는 더 나은 타입 추론과 성능을 제공합니다.",
    author: "최수진",
    createdAt: "2025-01-12",
  },
  {
    id: 5,
    title: "웹 개발 트렌드 2025",
    content: "2025년 웹 개발 트렌드를 살펴봅시다.",
    author: "정대호",
    createdAt: "2025-01-11",
  },
  {
    id: 6,
    title: "API 설계 모범 사례",
    content: "REST API를 설계할 때 고려해야 할 모범 사례들을 소개합니다.",
    author: "김철수",
    createdAt: "2025-01-10",
  },
  {
    id: 7,
    title: "데이터베이스 최적화 기법",
    content: "데이터베이스 쿼리 최적화를 위한 실용적인 팁들입니다.",
    author: "이영희",
    createdAt: "2025-01-09",
  },
  {
    id: 8,
    title: "보안 Best Practices",
    content:
      "웹 애플리케이션 개발 시 보안을 고려한 모범 사례를 알아봅시다.",
    author: "박민준",
    createdAt: "2025-01-08",
  },
]

// 사용자 찾기 (ID)
export function findUserById(id: number): User | undefined {
  return mockUsers.find((user) => user.id === id)
}

// 사용자 찾기 (이메일)
export function findUserByEmail(email: string): User | undefined {
  return mockUsers.find((user) => user.email === email)
}

// 게시물 찾기 (ID)
export function findPostById(id: number): Post | undefined {
  return mockPosts.find((post) => post.id === id)
}

// 게시물 페이지네이션
export function getPosts(page: number = 1, limit: number = 5) {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedPosts = mockPosts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(mockPosts.length / limit)

  return {
    data: paginatedPosts,
    pagination: {
      page,
      limit,
      total: mockPosts.length,
      totalPages,
    },
  }
}
