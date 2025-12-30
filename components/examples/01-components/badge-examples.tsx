import { Badge } from "@/components/ui/badge"

export function BadgeExamples() {
  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Badge 컴포넌트</h3>
          <p className="text-sm text-muted-foreground">
            작은 라벨을 사용하여 상태, 카테고리, 태그를 표시합니다.
          </p>
        </div>

        {/* 기본 Badge */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">기본 Badge</h4>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* 상태 표시 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">상태 표시</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500 hover:bg-green-600">
                활성
              </Badge>
              <span className="text-sm text-muted-foreground">시스템 활성화됨</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500 hover:bg-yellow-600">
                대기 중
              </Badge>
              <span className="text-sm text-muted-foreground">
                처리 중인 요청
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="destructive">오류</Badge>
              <span className="text-sm text-muted-foreground">오류 발생</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-gray-500 hover:bg-gray-600">
                비활성
              </Badge>
              <span className="text-sm text-muted-foreground">
                시스템 비활성화됨
              </span>
            </div>
          </div>
        </div>

        {/* 카테고리 태그 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">카테고리 태그</h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                기술
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                우선순위
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-red-500 hover:bg-red-600">긴급</Badge>
                <Badge className="bg-orange-500 hover:bg-orange-600">
                  높음
                </Badge>
                <Badge className="bg-yellow-500 hover:bg-yellow-600">
                  중간
                </Badge>
                <Badge className="bg-green-500 hover:bg-green-600">낮음</Badge>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                버전
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">v1.0.0</Badge>
                <Badge variant="outline">v2.0.0</Badge>
                <Badge>v3.0.0</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* 사용 시나리오 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">실제 사용 예제</h4>
          <div className="bg-muted rounded-lg p-4 space-y-3">
            {[
              {
                title: "Next.js 16 출시",
                status: "공개됨",
                tags: ["Next.js", "Announcement"],
              },
              {
                title: "데이터베이스 마이그레이션",
                status: "진행 중",
                tags: ["Database", "Migration"],
              },
              {
                title: "보안 업데이트",
                status: "완료",
                tags: ["Security", "Urgent"],
              },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-sm">{item.title}</p>
                  <Badge
                    variant={
                      item.status === "공개됨"
                        ? "secondary"
                        : item.status === "진행 중"
                          ? "default"
                          : "outline"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-md p-3">
          <p className="text-xs font-semibold text-purple-900 dark:text-purple-100 mb-2">
            💡 Badge 사용 시나리오:
          </p>
          <ul className="text-xs text-purple-800 dark:text-purple-200 space-y-1 list-disc list-inside">
            <li>
              <strong>상태</strong>: 활성, 비활성, 대기, 오류
            </li>
            <li>
              <strong>카테고리</strong>: 기술 스택, 주제 분류
            </li>
            <li>
              <strong>태그</strong>: 게시물, 이슈, PR 태그
            </li>
            <li>
              <strong>지표</strong>: 버전, 플래그, 위험도
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
