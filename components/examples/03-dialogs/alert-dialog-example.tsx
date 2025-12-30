"use client"

import { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogExample() {
  const [actionResult, setActionResult] = useState<string | null>(null)

  const handleDelete = () => {
    setActionResult("삭제되었습니다!")
    setTimeout(() => setActionResult(null), 2000)
  }

  const handleCancel = () => {
    setActionResult("작업이 취소되었습니다.")
    setTimeout(() => setActionResult(null), 2000)
  }

  return (
    <div className="rounded-lg border p-6 md:p-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">AlertDialog</h3>
          <p className="text-sm text-muted-foreground">
            중요한 작업을 수행하기 전에 사용자 확인을 받습니다.
          </p>
        </div>

        {actionResult && (
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-3">
            <p className="text-sm text-green-900 dark:text-green-100">
              ✓ {actionResult}
            </p>
          </div>
        )}

        {/* 기본 확인 대화상자 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">기본 확인 대화상자</h4>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">대화상자 열기</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>확인</AlertDialogTitle>
                <AlertDialogDescription>
                  이 작업을 진행하시겠습니까?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex gap-2 justify-end">
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction>확인</AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* 삭제 확인 대화상자 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">삭제 확인 (위험)</h4>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">항목 삭제</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  이 작업은 되돌릴 수 없습니다. 해당 항목이 영구적으로
                  삭제됩니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex gap-2 justify-end">
                <AlertDialogCancel onClick={handleCancel}>
                  취소
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  삭제
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* 로그아웃 확인 대화상자 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">로그아웃 확인</h4>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">로그아웃</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>로그아웃하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  로그아웃하면 다시 로그인해야 합니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex gap-2 justify-end">
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction onClick={handleCancel}>
                  로그아웃
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* 저장 확인 대화상자 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">저장 확인</h4>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">변경사항 저장</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>변경사항을 저장하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  저장하지 않으면 변경사항이 손실됩니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex gap-2 justify-end">
                <AlertDialogCancel>저장하지 않음</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  저장
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md p-3">
          <p className="text-xs font-semibold text-red-900 dark:text-red-100 mb-2">
            💡 AlertDialog 사용 시나리오:
          </p>
          <ul className="text-xs text-red-800 dark:text-red-200 space-y-1 list-disc list-inside">
            <li>
              <strong>파괴적 작업</strong>: 삭제, 초기화, 업데이트
            </li>
            <li>
              <strong>중요 결정</strong>: 구독 해제, 계정 삭제
            </li>
            <li>
              <strong>확인 필요</strong>: 결제, 로그아웃
            </li>
            <li>
              <strong>경고 메시지</strong>: 오류, 위험 상황
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
