import { NextResponse } from "next/server"
import { findUserById } from "../../mock-data"
import { ApiResponse, User } from "@/lib/types"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const userId = parseInt(id)

    if (isNaN(userId)) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: "유효하지 않은 사용자 ID입니다.",
        },
        { status: 400 }
      )
    }

    const user = findUserById(userId)

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: "사용자를 찾을 수 없습니다.",
        },
        { status: 404 }
      )
    }

    const response: ApiResponse<User> = {
      success: true,
      data: user,
      message: "사용자 조회 성공",
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: "사용자 조회 중 오류가 발생했습니다.",
      },
      { status: 500 }
    )
  }
}
