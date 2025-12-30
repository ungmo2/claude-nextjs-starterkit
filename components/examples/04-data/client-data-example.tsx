"use client"

import { useState, useEffect } from "react"
import { Post, PaginatedResponse } from "@/lib/types"
import { Button } from "@/components/ui/button"

export function ClientDataExample() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchPosts = async (pageNum: number) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `/api/posts?page=${pageNum}&limit=5`
      )

      if (!response.ok) {
        throw new Error("게시물 조회 실패")
      }

      const data = await response.json()
      const paginatedData = data.data as PaginatedResponse<Post>

      setPosts(paginatedData.data)
      setTotalPages(paginatedData.pagination.totalPages)
      setPage(pageNum)
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류 발생")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts(1)
  }, [])

  const handleNextPage = () => {
    if (page < totalPages) {
      fetchPosts(page + 1)
    }
  }

  const handlePrevPage = () => {
    if (page > 1) {
      fetchPosts(page - 1)
    }
  }

  const handleRefresh = () => {
    fetchPosts(page)
  }

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Client Component 데이터 페칭
          </h3>
          <p className="text-sm text-muted-foreground">
            Client Component에서 useEffect를 사용하여 클라이언트 측에서
            데이터를 가져옵니다.
          </p>
        </div>

        {error ? (
          <div className="bg-destructive/10 border border-destructive text-destructive rounded-md p-3">
            <p className="text-sm font-medium">오류: {error}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={handleRefresh}
              className="mt-2"
            >
              재시도
            </Button>
          </div>
        ) : loading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-muted rounded-lg p-3 h-20 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {page} / {totalPages} 페이지 ({posts.length}개 항목)
            </p>
            <div className="space-y-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-muted rounded-lg p-3 space-y-1 hover:bg-muted/80 transition-colors"
                >
                  <p className="font-medium text-sm">{post.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>작성자: {post.author}</span>
                    <span>{post.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                이전
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleNextPage}
                disabled={page === totalPages}
              >
                다음
              </Button>
              <Button size="sm" variant="outline" onClick={handleRefresh}>
                새로고침
              </Button>
            </div>
          </div>
        )}

        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-3 space-y-2">
          <p className="text-xs font-semibold text-green-900 dark:text-green-100">
            💡 Client Component의 특징:
          </p>
          <ul className="text-xs text-green-800 dark:text-green-200 space-y-1 list-disc list-inside">
            <li>상태 관리 (useState, useEffect) 사용</li>
            <li>사용자 상호작용에 대응 (버튼 클릭 등)</li>
            <li>로딩/에러 상태 직접 처리</li>
            <li>실시간 UI 업데이트</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
