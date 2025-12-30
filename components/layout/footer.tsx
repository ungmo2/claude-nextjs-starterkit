import Link from "next/link"
import { siteConfig, footerLinks } from "@/lib/constants"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* 푸터 링크 섹션 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-8">
          {/* 로고 및 설명 */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center font-bold text-lg">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>

            {/* 소셜 미디어 아이콘 */}
            <div className="flex gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.email}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 제품 */}
          <div>
            <h3 className="font-semibold text-sm mb-4">제품</h3>
            <ul className="space-y-2">
              {footerLinks.제품.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 리소스 */}
          <div>
            <h3 className="font-semibold text-sm mb-4">리소스</h3>
            <ul className="space-y-2">
              {footerLinks.리소스.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <h3 className="font-semibold text-sm mb-4">회사</h3>
            <ul className="space-y-2">
              {footerLinks.회사.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <Separator className="my-6" />

        {/* 저작권 및 법적 정보 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-sm text-muted-foreground">
            © 2025 {siteConfig.name}. 모든 권리 보유.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.법적.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
