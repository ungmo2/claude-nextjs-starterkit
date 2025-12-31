import { NextResponse } from "next/server"
import { getPosts } from "../mock-data"
import { ApiResponse, PaginatedResponse, Post } from "@/lib/types"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "5")

    // 유효성 검사
    if (page < 1 || limit < 1) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          message: "페이지와 limit은 1 이상이어야 합니다.",
        },
        { status: 400 }
      )
    }

    const result = getPosts(page, limit)

    const response: ApiResponse<PaginatedResponse<Post>> = {
      success: true,
      data: result,
      message: "게시물 목록 조회 성공",
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        message: "게시물 목록 조회 중 오류가 발생했습니다.",
      },
      { status: 500 }
    )
  }
}
