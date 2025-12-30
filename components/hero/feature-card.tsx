import { LucideIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-2">
      {/* 배경 그래디언트 (hover 시) */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader className="relative">
        <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
