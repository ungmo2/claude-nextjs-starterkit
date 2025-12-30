"use client"

import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Menu, Settings, Home, LogOut } from "lucide-react"

export function SheetExample() {
  const [formData, setFormData] = useState({ name: "", email: "" })

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Sheet (사이드 패널)</h3>
          <p className="text-sm text-muted-foreground">
            화면 가장자리에서 나타나는 슬라이드 패널입니다.
          </p>
        </div>

        {/* 기본 Sheet */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">기본 Sheet</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Sheet 열기</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet 제목</SheetTitle>
                <SheetDescription>
                  이것은 Sheet 패널의 설명입니다.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 py-4">
                <p className="text-sm text-muted-foreground">
                  Sheet 패널 내부의 콘텐츠입니다.
                </p>
                <SheetClose asChild>
                  <Button className="w-full">닫기</Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* 네비게이션 Sheet */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">네비게이션 메뉴</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>메뉴</SheetTitle>
              </SheetHeader>
              <div className="space-y-2 py-4">
                {[
                  { icon: Home, label: "홈" },
                  { icon: Settings, label: "설정" },
                  { icon: LogOut, label: "로그아웃" },
                ].map(({ icon: Icon, label }) => (
                  <SheetClose asChild key={label}>
                    <button className="flex items-center gap-2 w-full px-4 py-2 rounded-md hover:bg-muted transition-colors text-left">
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* 폼 Sheet */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">폼 포함 Sheet</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">폼 Sheet 열기</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>프로필 수정</SheetTitle>
                <SheetDescription>
                  프로필 정보를 수정하세요.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="sheet-name">이름</Label>
                  <Input
                    id="sheet-name"
                    placeholder="이름 입력"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sheet-email">이메일</Label>
                  <Input
                    id="sheet-email"
                    type="email"
                    placeholder="이메일 입력"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">저장</Button>
                  <SheetClose asChild>
                    <Button variant="outline" className="flex-1">
                      취소
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* 방향 옵션 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Sheet 방향</h4>
          <div className="flex flex-wrap gap-2">
            {(
              [
                { side: "top", label: "상단" },
                { side: "right", label: "우측" },
                { side: "bottom", label: "하단" },
                { side: "left", label: "좌측" },
              ] as const
            ).map(({ side, label }) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    {label}에서 열기
                  </Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle>{label}에서 열린 Sheet</SheetTitle>
                    <SheetDescription>
                      Sheet가 {label}에서 나타납니다.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <SheetClose asChild>
                      <Button className="w-full">닫기</Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 rounded-md p-3">
          <p className="text-xs font-semibold text-cyan-900 dark:text-cyan-100 mb-2">
            💡 Sheet 사용 시나리오:
          </p>
          <ul className="text-xs text-cyan-800 dark:text-cyan-200 space-y-1 list-disc list-inside">
            <li>
              <strong>네비게이션</strong>: 모바일 메뉴, 사이드바
            </li>
            <li>
              <strong>필터</strong>: 검색 필터, 정렬 옵션
            </li>
            <li>
              <strong>폼</strong>: 빠른 입력, 수정
            </li>
            <li>
              <strong>세부정보</strong>: 추가 정보 표시
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
