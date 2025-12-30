import { Code2Icon, Zap, PaletteIcon, RocketIcon } from "lucide-react"

export function DocContent() {
  return (
    <article className="max-w-3xl prose prose-sm dark:prose-invert">
      {/* 시작하기 섹션 */}
      <section className="space-y-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold m-0">시작하기</h2>
          </div>
          <p className="text-muted-foreground">
            이 가이드는 Next.js Starter Kit을 설정하고 사용하는 방법을 설명합니다.
          </p>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">설치</h3>
          <p className="text-sm text-muted-foreground">
            이 프로젝트는 이미 모든 필수 의존성이 설치되어 있습니다. 추가로 필요한 패키지는 npm을 통해 설치할 수 있습니다.
          </p>
          <pre className="bg-muted p-4 rounded overflow-x-auto text-xs">
            <code>{`npm install [package-name]\n# 또는\npnpm add [package-name]`}</code>
          </pre>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">기본 설정</h3>
          <p className="text-sm text-muted-foreground">
            프로젝트의 루트 레이아웃(app/layout.tsx)에는 ThemeProvider가 설정되어 있어 다크모드를 바로 사용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 컴포넌트 섹션 */}
      <section className="space-y-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Code2Icon className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold m-0">컴포넌트</h2>
          </div>
          <p className="text-muted-foreground">
            shadcn/ui는 13개의 기본 컴포넌트가 설치되어 있습니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 space-y-2">
            <h4 className="font-semibold text-sm">폼 컴포넌트</h4>
            <p className="text-xs text-muted-foreground">
              Input, Select, Textarea, Label, Field 등 폼 작성에 필요한 컴포넌트들
            </p>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <h4 className="font-semibold text-sm">레이아웃</h4>
            <p className="text-xs text-muted-foreground">
              Card, Separator, Sheet 등 레이아웃 구성에 필요한 컴포넌트들
            </p>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <h4 className="font-semibold text-sm">상호작용</h4>
            <p className="text-xs text-muted-foreground">
              Button, AlertDialog, DropdownMenu, Combobox 등 사용자 상호작용 컴포넌트들
            </p>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <h4 className="font-semibold text-sm">표현</h4>
            <p className="text-xs text-muted-foreground">
              Badge, Tabs, Dropdown 등 정보 표현 컴포넌트들
            </p>
          </div>
        </div>

        <div className="border-l-2 border-primary/30 pl-4 space-y-2">
          <h4 className="font-semibold">컴포넌트 추가</h4>
          <p className="text-sm text-muted-foreground">
            새로운 shadcn/ui 컴포넌트를 추가하려면:
          </p>
          <pre className="bg-muted p-4 rounded overflow-x-auto text-xs">
            <code>{`npx shadcn@latest add [component-name]`}</code>
          </pre>
        </div>
      </section>

      {/* 스타일링 섹션 */}
      <section className="space-y-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <PaletteIcon className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold m-0">스타일링</h2>
          </div>
          <p className="text-muted-foreground">
            이 프로젝트는 Tailwind CSS 4.0을 사용합니다.
          </p>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">Tailwind CSS</h3>
          <p className="text-sm text-muted-foreground">
            모든 컴포넌트는 Tailwind CSS 유틸리티 클래스로 스타일링되어 있습니다. 필요에 따라 클래스를 조정할 수 있습니다.
          </p>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">다크모드</h3>
          <p className="text-sm text-muted-foreground">
            next-themes를 사용하여 라이트/다크/시스템 테마를 지원합니다. 헤더의 테마 토글 버튼으로 테마를 변경할 수 있습니다.
          </p>
          <pre className="bg-muted p-4 rounded overflow-x-auto text-xs">
            <code>{`// .dark 클래스로 다크모드 스타일링\n<div className="bg-white dark:bg-black">...</div>`}</code>
          </pre>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">커스텀 스타일</h3>
          <p className="text-sm text-muted-foreground">
            app/globals.css에서 CSS 변수와 커스텀 스타일을 정의할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 배포 섹션 */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RocketIcon className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold m-0">배포</h2>
          </div>
          <p className="text-muted-foreground">
            Next.js 애플리케이션은 여러 플랫폼에 배포할 수 있습니다.
          </p>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">Vercel</h3>
          <p className="text-sm text-muted-foreground">
            Next.js의 제작사인 Vercel은 Next.js 앱을 배포하는 가장 쉬운 방법을 제공합니다.
          </p>
          <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
            <li>Vercel 계정 생성</li>
            <li>GitHub 저장소 연결</li>
            <li>자동 배포 설정</li>
          </ol>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">자체 호스팅</h3>
          <p className="text-sm text-muted-foreground">
            Node.js 환경이 있는 모든 서버에 배포할 수 있습니다.
          </p>
          <pre className="bg-muted p-4 rounded overflow-x-auto text-xs">
            <code>{`npm run build\nnpm run start`}</code>
          </pre>
        </div>

        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
          <h3 className="font-semibold">환경 변수</h3>
          <p className="text-sm text-muted-foreground">
            .env.local 파일에서 환경 변수를 설정할 수 있습니다.
          </p>
          <pre className="bg-muted p-4 rounded overflow-x-auto text-xs">
            <code>{`NEXT_PUBLIC_API_URL=https://api.example.com`}</code>
          </pre>
        </div>
      </section>
    </article>
  )
}
