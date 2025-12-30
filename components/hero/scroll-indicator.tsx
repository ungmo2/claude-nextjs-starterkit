"use client"

export function ScrollIndicator() {
  const scrollToContent = () => {
    const element = document.getElementById("features-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      aria-label="Scroll to content"
    >
      <span className="text-xs font-medium">Scroll</span>
      <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
        <div className="w-1 h-3 rounded-full bg-current animate-bounce" />
      </div>
    </button>
  )
}
