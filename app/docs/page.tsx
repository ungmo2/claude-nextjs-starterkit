import { Metadata } from "next"
import { docNavItems } from "@/lib/constants"
import { DocNav } from "@/components/docs/doc-nav"
import { DocContent } from "@/components/docs/doc-content"

export const metadata: Metadata = {
  title: "문서 | Next.js Starter Kit",
  description: "Next.js Starter Kit 문서 및 가이드",
}

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* 사이드바 네비게이션 */}
        <DocNav items={docNavItems} />

        {/* 메인 컨텐츠 */}
        <main className="min-w-0">
          <DocContent />
        </main>
      </div>
    </div>
  )
}
