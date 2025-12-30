import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TabsExamples() {
  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Tabs 컴포넌트</h3>
          <p className="text-sm text-muted-foreground">
            탭을 사용하여 관련된 콘텐츠를 그룹화합니다.
          </p>
        </div>

        {/* 기본 탭 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">기본 탭</h4>
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">탭 1</TabsTrigger>
              <TabsTrigger value="tab2">탭 2</TabsTrigger>
              <TabsTrigger value="tab3">탭 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="space-y-2">
              <p className="text-sm text-muted-foreground">
                첫 번째 탭의 콘텐츠입니다.
              </p>
            </TabsContent>
            <TabsContent value="tab2" className="space-y-2">
              <p className="text-sm text-muted-foreground">
                두 번째 탭의 콘텐츠입니다.
              </p>
            </TabsContent>
            <TabsContent value="tab3" className="space-y-2">
              <p className="text-sm text-muted-foreground">
                세 번째 탭의 콘텐츠입니다.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* 문서 탭 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">문서 탭</h4>
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">설명</TabsTrigger>
              <TabsTrigger value="specs">스펙</TabsTrigger>
              <TabsTrigger value="reviews">리뷰</TabsTrigger>
              <TabsTrigger value="pricing">가격</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <Card>
                <CardHeader>
                  <CardTitle>제품 설명</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    이것은 놀라운 제품입니다. 다양한 기능과 우수한 성능을 제공합니다.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs">
              <Card>
                <CardHeader>
                  <CardTitle>기술 사양</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>크기: 100mm × 50mm</li>
                    <li>무게: 250g</li>
                    <li>배터리: 5000mAh</li>
                    <li>연결: WiFi 6E</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>고객 리뷰</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { rating: "⭐⭐⭐⭐⭐", text: "정말 좋아요!" },
                    { rating: "⭐⭐⭐⭐", text: "기대 이상입니다" },
                    { rating: "⭐⭐⭐⭐⭐", text: "추천합니다" },
                  ].map((review, i) => (
                    <div key={i} className="text-sm">
                      <p className="font-semibold">{review.rating}</p>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pricing">
              <Card>
                <CardHeader>
                  <CardTitle>가격 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-2xl font-bold">$299.99</div>
                  <p className="text-sm text-muted-foreground">
                    무료 배송 및 2년 보증 포함
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* 중첩된 탭 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">중첩된 탭</h4>
          <Tabs defaultValue="section1" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="section1">섹션 1</TabsTrigger>
              <TabsTrigger value="section2">섹션 2</TabsTrigger>
            </TabsList>

            <TabsContent value="section1" className="space-y-4">
              <Tabs defaultValue="sub1" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="sub1">서브 1-1</TabsTrigger>
                  <TabsTrigger value="sub2">서브 1-2</TabsTrigger>
                </TabsList>
                <TabsContent value="sub1">
                  <p className="text-sm text-muted-foreground">
                    섹션 1의 서브 탭 1 콘텐츠
                  </p>
                </TabsContent>
                <TabsContent value="sub2">
                  <p className="text-sm text-muted-foreground">
                    섹션 1의 서브 탭 2 콘텐츠
                  </p>
                </TabsContent>
              </Tabs>
            </TabsContent>

            <TabsContent value="section2">
              <Tabs defaultValue="sub3" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="sub3">서브 2-1</TabsTrigger>
                  <TabsTrigger value="sub4">서브 2-2</TabsTrigger>
                </TabsList>
                <TabsContent value="sub3">
                  <p className="text-sm text-muted-foreground">
                    섹션 2의 서브 탭 1 콘텐츠
                  </p>
                </TabsContent>
                <TabsContent value="sub4">
                  <p className="text-sm text-muted-foreground">
                    섹션 2의 서브 탭 2 콘텐츠
                  </p>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-md p-3">
          <p className="text-xs font-semibold text-orange-900 dark:text-orange-100 mb-2">
            💡 Tabs 사용 시나리오:
          </p>
          <ul className="text-xs text-orange-800 dark:text-orange-200 space-y-1 list-disc list-inside">
            <li>
              <strong>문서</strong>: 설명, 스펙, 리뷰 탭
            </li>
            <li>
              <strong>설정</strong>: 일반, 보안, 알림 탭
            </li>
            <li>
              <strong>이커머스</strong>: 상세정보, 리뷰, Q&A 탭
            </li>
            <li>
              <strong>대시보드</strong>: 일일, 주간, 월간 뷰
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
