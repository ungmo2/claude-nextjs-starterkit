"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { navigationLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80",
            pathname === link.href
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
