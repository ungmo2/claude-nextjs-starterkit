import { Button } from "@/components/ui/button"
import { Trash2, Download, Check } from "lucide-react"

export function ButtonExamples() {
  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Button 컴포넌트</h3>
          <p className="text-sm text-muted-foreground">
            다양한 버튼 스타일과 크기를 제공합니다.
          </p>
        </div>

        {/* Variant 예제 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Variant (스타일)</h4>
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Size 예제 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Size (크기)</h4>
          <div className="flex flex-wrap gap-2 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* 아이콘 포함 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">아이콘 포함</h4>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            <Button variant="outline" size="sm">
              <Check className="w-4 h-4 mr-2" />
              Confirm
            </Button>
          </div>
        </div>

        {/* 상태 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">상태</h4>
          <div className="flex flex-wrap gap-2">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </div>

        {/* 풀 너비 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">풀 너비</h4>
          <Button className="w-full">Full Width Button</Button>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md p-3">
          <p className="text-xs font-semibold text-blue-900 dark:text-blue-100 mb-2">
            💡 사용 시나리오:
          </p>
          <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
            <li>
              <strong>Default</strong>: 주요 작업
            </li>
            <li>
              <strong>Secondary</strong>: 보조 작업
            </li>
            <li>
              <strong>Destructive</strong>: 위험한 작업 (삭제, 취소)
            </li>
            <li>
              <strong>Outline</strong>: 중성적인 작업
            </li>
            <li>
              <strong>Ghost</strong>: 최소한의 시각적 무게
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
