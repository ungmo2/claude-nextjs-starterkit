import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ButtonExamples } from "@/components/examples/01-components/button-examples"
import { CardExamples } from "@/components/examples/01-components/card-examples"
import { BadgeExamples } from "@/components/examples/01-components/badge-examples"
import { TabsExamples } from "@/components/examples/01-components/tabs-examples"
import { BasicFormExample } from "@/components/examples/02-forms/basic-form-example"
import { ValidationFormExample } from "@/components/examples/02-forms/validation-form-example"
import { SelectComboboxExample } from "@/components/examples/02-forms/select-combobox-example"
import { AlertDialogExample } from "@/components/examples/03-dialogs/alert-dialog-example"
import { SheetExample } from "@/components/examples/03-dialogs/sheet-example"
import ServerDataExample from "@/components/examples/04-data/server-data-example"
import { ClientDataExample } from "@/components/examples/04-data/client-data-example"
import { LoadingErrorExample } from "@/components/examples/04-data/loading-error-example"

export const metadata: Metadata = {
  title: "컴포넌트 예제 | Next.js Starter Kit",
  description: "shadcn/ui 컴포넌트 예제 및 사용 방법",
}

export default function ExamplesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      {/* 페이지 제목 */}
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">컴포넌트 예제</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          이 페이지에서는 설치된 shadcn/ui 컴포넌트들의 실제 사용 예제를 확인할 수 있습니다.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <Tabs defaultValue="컴포넌트" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="컴포넌트">컴포넌트</TabsTrigger>
          <TabsTrigger value="폼">폼</TabsTrigger>
          <TabsTrigger value="대화상자">대화상자</TabsTrigger>
          <TabsTrigger value="데이터">데이터</TabsTrigger>
        </TabsList>

        {/* 컴포넌트 탭 */}
        <TabsContent value="컴포넌트" className="space-y-8 mt-6">
          <ButtonExamples />
          <CardExamples />
          <BadgeExamples />
          <TabsExamples />
        </TabsContent>

        {/* 폼 탭 */}
        <TabsContent value="폼" className="space-y-8 mt-6">
          <BasicFormExample />
          <ValidationFormExample />
          <SelectComboboxExample />
        </TabsContent>

        {/* 대화상자 탭 */}
        <TabsContent value="대화상자" className="space-y-8 mt-6">
          <AlertDialogExample />
          <SheetExample />
        </TabsContent>

        {/* 데이터 탭 */}
        <TabsContent value="데이터" className="space-y-8 mt-6">
          <ServerDataExample />
          <ClientDataExample />
          <LoadingErrorExample />
        </TabsContent>
      </Tabs>

      {/* 추가 정보 */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">shadcn/ui란?</h3>
          <p className="text-sm text-muted-foreground">
            shadcn/ui는 Radix UI와 Tailwind CSS를 기반으로 한 고품질 React 컴포넌트 라이브러리입니다. 디자인 시스템을 빠르게 구축할 수 있습니다.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">더 알아보기</h3>
          <p className="text-sm text-muted-foreground">
            각 컴포넌트의 사용 방법과 API에 대해 자세히 알아보려면 문서 페이지를 방문하세요.
          </p>
        </div>
      </div>
    </div>
  )
}
