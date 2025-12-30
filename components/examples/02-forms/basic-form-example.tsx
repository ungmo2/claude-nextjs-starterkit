"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

export function BasicFormExample() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 기본 유효성 검사
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      alert("모든 필드를 입력해주세요.")
      return
    }

    console.log("폼 제출:", formData)
    setSubmitted(true)

    // 2초 후 초기화
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">기본 폼</h3>
          <p className="text-sm text-muted-foreground">
            React의 기본 상태 관리(useState)를 사용한 간단한 폼 구현입니다.
          </p>
        </div>

        {submitted && (
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-4 space-y-2">
            <p className="text-sm font-semibold text-green-900 dark:text-green-100">
              ✓ 폼이 성공적으로 제출되었습니다!
            </p>
            <p className="text-xs text-green-800 dark:text-green-200">
              {formData.firstName} {formData.lastName}님, 메시지를 받았습니다.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 이름 필드 */}
            <div className="space-y-2">
              <Label htmlFor="firstName">이름</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="김"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            {/* 성 필드 */}
            <div className="space-y-2">
              <Label htmlFor="lastName">성</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="철수"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 이메일 필드 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* 메시지 필드 */}
          <div className="space-y-2">
            <Label htmlFor="message">메시지</Label>
            <textarea
              id="message"
              name="message"
              placeholder="메시지를 입력해주세요..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* 제출 버튼 */}
          <Button type="submit" className="w-full">
            전송
          </Button>
        </form>

        {/* 정보 박스 */}
        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-md p-3 space-y-2">
          <p className="text-xs font-semibold text-amber-900 dark:text-amber-100">
            💡 기본 폼의 특징:
          </p>
          <ul className="text-xs text-amber-800 dark:text-amber-200 space-y-1 list-disc list-inside">
            <li>단순한 상태 관리 (useState)</li>
            <li>기본적인 유효성 검사</li>
            <li>작은 폼에 적합</li>
            <li>복잡한 검증이 필요 없을 때 사용</li>
          </ul>
        </div>

        {/* 현재 폼 데이터 표시 */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded p-3">
          <p className="text-xs font-semibold mb-2 text-foreground">
            현재 폼 데이터:
          </p>
          <pre className="text-xs overflow-auto text-muted-foreground">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
