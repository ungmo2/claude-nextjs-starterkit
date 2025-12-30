"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Zod 스키마 정의 (타입 + 유효성 검사)
const formSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 최소 2글자 이상이어야 합니다.")
    .max(50, "이름은 50글자 이하여야 합니다."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  password: z
    .string()
    .min(8, "비밀번호는 최소 8글자 이상이어야 합니다.")
    .regex(/[A-Z]/, "비밀번호는 최소 1개의 대문자를 포함해야 합니다.")
    .regex(/[0-9]/, "비밀번호는 최소 1개의 숫자를 포함해야 합니다."),
  confirmPassword: z.string(),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^010-\d{4}-\d{4}$/.test(val),
      "휴대폰 번호는 010-XXXX-XXXX 형식이어야 합니다."
    ),
  age: z
    .string()
    .optional()
    .refine(
      (val) => !val || (parseInt(val) >= 18 && parseInt(val) <= 120),
      "나이는 18 이상 120 이하여야 합니다."
    ),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["confirmPassword"],
})

type FormData = z.infer<typeof formSchema>

export function ValidationFormExample() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // 필드를 떠날 때 검증
  })

  const onSubmit = (data: FormData) => {
    setSubmittedData(data)
    setSubmitted(true)
    console.log("폼 제출:", data)

    // 2초 후 초기화
    setTimeout(() => {
      setSubmitted(false)
    }, 2000)
  }

  const handleReset = () => {
    reset()
    setSubmitted(false)
    setSubmittedData(null)
  }

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            React Hook Form + Zod 검증
          </h3>
          <p className="text-sm text-muted-foreground">
            타입 안전한 폼 검증과 한국어 에러 메시지를 제공합니다.
          </p>
        </div>

        {submitted && submittedData && (
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-4 space-y-2">
            <p className="text-sm font-semibold text-green-900 dark:text-green-100">
              ✓ 폼이 성공적으로 제출되었습니다!
            </p>
            <pre className="text-xs bg-white dark:bg-black p-2 rounded overflow-auto text-muted-foreground">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* 이름 필드 */}
          <div className="space-y-2">
            <Label htmlFor="name">이름 *</Label>
            <Input
              id="name"
              placeholder="예: 김철수"
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* 이메일 필드 */}
          <div className="space-y-2">
            <Label htmlFor="email">이메일 *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* 비밀번호 필드 */}
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호 *</Label>
            <Input
              id="password"
              type="password"
              placeholder="8글자 이상, 대문자/숫자 포함"
              {...register("password")}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p className="text-xs text-destructive">{errors.password.message}</p>
            )}
          </div>

          {/* 비밀번호 확인 필드 */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">비밀번호 확인 *</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호 재입력"
              {...register("confirmPassword")}
              aria-invalid={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* 휴대폰 필드 (선택사항) */}
          <div className="space-y-2">
            <Label htmlFor="phone">휴대폰 (선택)</Label>
            <Input
              id="phone"
              placeholder="010-XXXX-XXXX"
              {...register("phone")}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* 나이 필드 (선택사항) */}
          <div className="space-y-2">
            <Label htmlFor="age">나이 (선택)</Label>
            <Input
              id="age"
              type="number"
              placeholder="18-120"
              {...register("age")}
              aria-invalid={!!errors.age}
            />
            {errors.age && (
              <p className="text-xs text-destructive">{errors.age.message}</p>
            )}
          </div>

          {/* 버튼 */}
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              제출
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="flex-1"
            >
              초기화
            </Button>
          </div>
        </form>

        {/* 정보 박스 */}
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md p-3 space-y-2">
          <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">
            💡 React Hook Form + Zod의 장점:
          </p>
          <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
            <li>
              <strong>타입 안전성</strong>: Zod로 정의한 스키마에서 TypeScript
              타입 자동 생성
            </li>
            <li>
              <strong>높은 성능</strong>: 필드 단위 검증, 불필요한 리렌더링
              최소화
            </li>
            <li>
              <strong>유연한 검증</strong>: 복합 검증 규칙 쉽게 정의
              가능
            </li>
            <li>
              <strong>한국어 메시지</strong>: 사용자 친화적 오류 메시지
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
