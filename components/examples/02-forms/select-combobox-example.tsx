"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ComboboxOption {
  value: string
  label: string
}

const countries = [
  { value: "kr", label: "대한민국 🇰🇷" },
  { value: "us", label: "미국 🇺🇸" },
  { value: "jp", label: "일본 🇯🇵" },
  { value: "cn", label: "중국 🇨🇳" },
  { value: "gb", label: "영국 🇬🇧" },
  { value: "de", label: "독일 🇩🇪" },
  { value: "fr", label: "프랑스 🇫🇷" },
  { value: "br", label: "브라질 🇧🇷" },
] as const

const languages = [
  { value: "ko", label: "한국어" },
  { value: "en", label: "English" },
  { value: "ja", label: "日本語" },
  { value: "zh", label: "中文" },
] as const

export function SelectComboboxExample() {
  const [selectedCountry, setSelectedCountry] = useState<string>("")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("")
  const [comboboxValue, setComboboxValue] = useState<string>("")
  const [filteredOptions, setFilteredOptions] =
    useState<ComboboxOption[]>([...countries])
  const [isOpen, setIsOpen] = useState(false)

  // Combobox 필터링
  const handleComboboxChange = (value: string) => {
    setComboboxValue(value)
    if (value === "") {
      setFilteredOptions([...countries])
    } else {
      const filtered = countries.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredOptions([...filtered])
    }
  }

  // 선택 처리
  const handleComboboxSelect = (value: string) => {
    setSelectedCountry(value)
    setComboboxValue("")
    setFilteredOptions([...countries])
    setIsOpen(false)
  }

  const handleReset = () => {
    setSelectedCountry("")
    setSelectedLanguage("")
    setComboboxValue("")
    setFilteredOptions([...countries])
  }

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Select vs Combobox</h3>
          <p className="text-sm text-muted-foreground">
            Select (고정 옵션)와 Combobox (검색 가능)의 차이를 확인합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Select 섹션 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Select 컴포넌트</h4>
            <div className="space-y-2">
              <Label htmlFor="language">선호 언어</Label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="언어를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedLanguage && (
              <div className="bg-muted rounded p-2 text-sm">
                선택됨:{" "}
                {
                  languages.find((lang) => lang.value === selectedLanguage)
                    ?.label
                }
              </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md p-2 space-y-1">
              <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">
                Select의 특징:
              </p>
              <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
                <li>고정된 옵션 리스트</li>
                <li>검색 기능 없음</li>
                <li>옵션이 적을 때 적합</li>
              </ul>
            </div>
          </div>

          {/* Combobox 섹션 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Combobox (검색 가능)</h4>
            <div className="space-y-2">
              <Label htmlFor="country">국가 (검색 가능)</Label>
              <div className="relative">
                <Input
                  id="country"
                  placeholder="국가를 검색하세요..."
                  value={comboboxValue}
                  onChange={(e) => handleComboboxChange(e.target.value)}
                  onFocus={() => setIsOpen(true)}
                  autoComplete="off"
                />
                {isOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-950 border border-border rounded-md shadow-md z-10 max-h-40 overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                      filteredOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className="w-full text-left px-3 py-2 hover:bg-muted transition-colors"
                          onClick={() => handleComboboxSelect(option.value)}
                        >
                          {option.label}
                        </button>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-sm text-muted-foreground">
                        결과 없음
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {selectedCountry && (
              <div className="bg-muted rounded p-2 text-sm">
                선택됨:{" "}
                {countries.find((c) => c.value === selectedCountry)?.label}
              </div>
            )}

            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-2 space-y-1">
              <p className="text-xs font-semibold text-green-900 dark:text-green-100">
                Combobox의 특징:
              </p>
              <ul className="text-xs text-green-800 dark:text-green-200 space-y-1 list-disc list-inside">
                <li>검색 기능 제공</li>
                <li>빠르게 옵션 찾기</li>
                <li>옵션이 많을 때 적합</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 비교 테이블 */}
        <div className="border-t pt-4">
          <h4 className="font-semibold text-sm mb-3">비교 분석</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">특징</th>
                  <th className="text-center p-2">Select</th>
                  <th className="text-center p-2">Combobox</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">검색 기능</td>
                  <td className="text-center">✗</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">키보드 입력</td>
                  <td className="text-center">✗</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">옵션 많음</td>
                  <td className="text-center">미흡</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr>
                  <td className="p-2">구현 복잡도</td>
                  <td className="text-center">낮음</td>
                  <td className="text-center">높음</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 초기화 버튼 */}
        <Button
          variant="outline"
          onClick={handleReset}
          className="w-full"
        >
          초기화
        </Button>
      </div>
    </div>
  )
}
