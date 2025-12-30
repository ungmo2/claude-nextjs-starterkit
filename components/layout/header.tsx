import Link from "next/link"
import { siteConfig } from "@/lib/constants"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex h-14 items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg"
        >
          <span className="hidden sm:inline-block">
            {siteConfig.name}
          </span>
          <span className="sm:hidden">SK</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <MainNav />

        {/* 우측 요소들 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
