import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Activity } from "lucide-react"

export function CardExamples() {
  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Card 컴포넌트</h3>
          <p className="text-sm text-muted-foreground">
            정보를 구성하고 표현하는 Card 컴포넌트의 다양한 사용 패턴입니다.
          </p>
        </div>

        {/* 통계 카드 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">통계 카드</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  총 매출
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  지난 달 대비 +20.1%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  사용자
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,547</div>
                <p className="text-xs text-muted-foreground">
                  지난 달 대비 +12.5%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  활동
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,234</div>
                <p className="text-xs text-muted-foreground">
                  지난 주 대비 -4.3%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 일반 카드 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">일반 카드</h4>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Next.js Starter Kit</CardTitle>
              <CardDescription>
                빠르고 현대적인 웹 애플리케이션 개발
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                이 스타터 킷은 Next.js, React, TypeScript, Tailwind CSS,
                shadcn/ui로 구성되어 있습니다.
              </p>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>타입 안전성</li>
                <li>다크모드 지원</li>
                <li>반응형 디자인</li>
                <li>개발 도구 통합</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 가격 카드 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">가격 카드</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Starter",
                price: "$29",
                features: [
                  "10 프로젝트",
                  "기본 지원",
                  "1GB 스토리지",
                ],
              },
              {
                name: "Professional",
                price: "$79",
                features: [
                  "무제한 프로젝트",
                  "우선 지원",
                  "100GB 스토리지",
                  "팀 협업",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "문의",
                features: [
                  "모든 기능",
                  "24/7 지원",
                  "무제한 스토리지",
                  "전용 관리자",
                ],
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.popular
                    ? "border-primary shadow-lg"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground">
                    {plan.price}
                    {!plan.price.includes("문의") && (
                      <span className="text-sm text-muted-foreground">/month</span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-3">
          <p className="text-xs font-semibold text-green-900 dark:text-green-100 mb-2">
            💡 Card 사용 패턴:
          </p>
          <ul className="text-xs text-green-800 dark:text-green-200 space-y-1 list-disc list-inside">
            <li>
              <strong>통계</strong>: 주요 지표를 한눈에 표시
            </li>
            <li>
              <strong>콘텐츠</strong>: 게시물, 제품, 정보 표시
            </li>
            <li>
              <strong>가격</strong>: 플랜 비교 및 선택
            </li>
            <li>
              <strong>피드</strong>: 소셜 미디어 스타일 아이템
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
