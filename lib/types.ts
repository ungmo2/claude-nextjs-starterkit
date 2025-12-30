// API 응답 타입 정의

export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface Post {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}
