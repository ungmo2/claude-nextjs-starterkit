import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { features } from "@/lib/constants"
import { FeatureCard } from "./feature-card"
import { getUnsplashImageUrl, heroImages } from "@/lib/unsplash"
import { ParticlesBackground } from "./particles-background"
import { TypingText } from "./typing-text"
import { ScrollIndicator } from "./scroll-indicator"

export function HeroSection() {
  return (
    <>
      {/* 메인 히어로 섹션 */}
      <section className="relative overflow-hidden">
        {/* 배경 그래디언트 */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-background" />

        {/* Particles 애니메이션 */}
        <ParticlesBackground />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative py-24 md:py-32 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* 좌측: 텍스트 컨텐츠 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  당신만의 스타터킷으로
                  <span className="block mt-2">
                    <TypingText
                      text="시작하세요"
                      className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
                    />
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
                  Next.js와 최신 웹 기술로 빠르고 아름다운 웹 애플리케이션을 만들어보세요.
                </p>
              </div>

              {/* CTA 버튼 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <Link href="/examples">시작하기</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 hover:bg-accent/50"
                >
                  <Link href="/docs">더 알아보기</Link>
                </Button>
              </div>
            </div>

            {/* 우측: 히어로 이미지 / 그래디언트 */}
            <div className="relative aspect-square lg:aspect-auto lg:h-125 overflow-hidden rounded-2xl group">
              {/* 이미지 */}
              <Image
                src={getUnsplashImageUrl(heroImages.tech, 1200, 800)}
                alt="Modern workspace"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* 오버레이 (가독성 향상) */}
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-background/20 to-transparent" />

              {/* 장식 요소 */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-md text-xs text-muted-foreground">
                Photo by{" "}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Unsplash
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* 주요 기능 섹션 */}
      <section id="features-section" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            주요 기능
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            이 스타터킷이 제공하는 강력한 기능들을 만나보세요
          </p>
        </div>

        {/* 특징 카드 그리드 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </>
  )
}
