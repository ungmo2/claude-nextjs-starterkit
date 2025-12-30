import { User } from "@/lib/types"

// Server Component에서 데이터 페칭
async function ServerDataExample() {
  let users: User[] = []
  let error: string | null = null

  try {
    const response = await fetch("http://localhost:3000/api/users", {
      cache: "no-store", // 캐시 비활성화 (항상 최신 데이터)
    })

    if (!response.ok) {
      throw new Error("데이터 페칭 실패")
    }

    const data = await response.json()
    users = data.data
  } catch (err) {
    error = err instanceof Error ? err.message : "알 수 없는 오류 발생"
  }

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Server Component 데이터 페칭
          </h3>
          <p className="text-sm text-muted-foreground">
            Server Component에서 async/await를 사용하여 직접 서버에서 데이터를
            가져옵니다.
          </p>
        </div>

        {error ? (
          <div className="bg-destructive/10 border border-destructive text-destructive rounded-md p-3">
            <p className="text-sm font-medium">오류: {error}</p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              총 {users.length}명의 사용자가 조회되었습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="bg-muted rounded-lg p-3 space-y-1"
                >
                  <p className="font-medium text-sm">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      역할: {user.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md p-3 space-y-2">
          <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">
            💡 Server Component의 장점:
          </p>
          <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
            <li>API 키 보안 (클라이언트에 노출 안 됨)</li>
            <li>데이터베이스에 직접 접근 가능</li>
            <li>번들 크기 감소</li>
            <li>SEO 최적화</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServerDataExample
