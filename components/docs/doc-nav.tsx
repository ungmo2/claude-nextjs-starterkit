"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface DocNavItem {
  title: string
  items: {
    label: string
    href: string
  }[]
}

interface DocNavProps {
  items: DocNavItem[]
}

export function DocNav({ items }: DocNavProps) {
  return (
    <nav className="hidden lg:block space-y-6 sticky top-16">
      {items.map((group, index) => (
        <div key={index}>
          <h3 className="font-semibold text-sm mb-3 text-foreground">
            {group.title}
          </h3>
          <ul className="space-y-2">
            {group.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground transition-colors block py-1 px-2 rounded hover:bg-muted",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
