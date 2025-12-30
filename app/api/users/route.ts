import { NextResponse } from "next/server"
import { mockUsers } from "../mock-data"
import { ApiResponse } from "@/lib/types"

export async function GET() {
  try {
    const response: ApiResponse<typeof mockUsers> = {
      success: true,
      data: mockUsers,
      message: "사용자 목록 조회 성공",
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: "사용자 목록 조회 중 오류가 발생했습니다.",
      },
      { status: 500 }
    )
  }
}
