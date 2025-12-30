"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LoadingErrorExample() {
  const [simulationState, setSimulationState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [simulationData, setSimulationData] = useState<string | null>(null)

  const simulateLoading = async () => {
    setSimulationState("loading")
    setSimulationData(null)

    // 2초 후 성공
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setSimulationState("success")
    setSimulationData("데이터가 성공적으로 로드되었습니다!")
  }

  const simulateError = async () => {
    setSimulationState("loading")
    setSimulationData(null)

    // 2초 후 에러
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setSimulationState("error")
  }

  const resetSimulation = () => {
    setSimulationState("idle")
    setSimulationData(null)
  }

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">로딩 & 에러 UI 패턴</h3>
          <p className="text-sm text-muted-foreground">
            데이터 페칭 상태(로딩, 성공, 에러)에 따른 UI 표현 방식을 확인합니다.
          </p>
        </div>

        {/* 상태별 UI */}
        <div className="bg-muted rounded-lg p-4 min-h-24 flex items-center justify-center">
          {simulationState === "idle" && (
            <p className="text-sm text-muted-foreground">
              아래 버튼을 클릭하여 시뮬레이션을 시작하세요.
            </p>
          )}

          {simulationState === "loading" && (
            <div className="space-y-2 w-full">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-1/2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-2/3"></div>
            </div>
          )}

          {simulationState === "success" && (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">{simulationData}</span>
            </div>
          )}

          {simulationState === "error" && (
            <div className="space-y-2 w-full">
              <div className="bg-destructive/10 border border-destructive text-destructive rounded-md p-3">
                <p className="text-sm font-medium">오류 발생</p>
                <p className="text-xs text-destructive/80">
                  데이터를 불러오는 중에 오류가 발생했습니다.
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={simulateLoading}
                className="w-full"
              >
                재시도
              </Button>
            </div>
          )}
        </div>

        {/* 컨트롤 버튼 */}
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" onClick={simulateLoading}>
            로딩 시뮬레이션
          </Button>
          <Button size="sm" variant="outline" onClick={simulateError}>
            에러 시뮬레이션
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={resetSimulation}
            disabled={simulationState === "idle"}
          >
            초기화
          </Button>
        </div>

        {/* 패턴 설명 */}
        <div className="space-y-3 border-t pt-4">
          <h4 className="font-semibold text-sm">구현 패턴:</h4>
          <div className="space-y-2 text-xs">
            <div className="bg-slate-50 dark:bg-slate-950 rounded p-2">
              <p className="font-mono text-xs mb-1">로딩 상태</p>
              <p className="text-muted-foreground">Skeleton 또는 Pulse 애니메이션</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded p-2">
              <p className="font-mono text-xs mb-1">성공 상태</p>
              <p className="text-muted-foreground">데이터 표시 + 체크 아이콘</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded p-2">
              <p className="font-mono text-xs mb-1">에러 상태</p>
              <p className="text-muted-foreground">
                에러 메시지 + 재시도 버튼
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-md p-3 space-y-2">
          <p className="text-xs font-semibold text-purple-900 dark:text-purple-100">
            💡 Best Practices:
          </p>
          <ul className="text-xs text-purple-800 dark:text-purple-200 space-y-1 list-disc list-inside">
            <li>로딩 중: Skeleton UI 또는 진행률 표시</li>
            <li>에러: 사용자 친화적 메시지 + 재시도 옵션</li>
            <li>재시도 로직: 실패했을 때 사용자가 다시 시도할 수 있도록</li>
            <li>타임아웃: 오래 걸리는 요청에 대한 처리</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
