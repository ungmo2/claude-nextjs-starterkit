// Unsplash API 이미지 URL 생성 함수
export function getUnsplashImageUrl(
  imageId: string,
  width: number = 800,
  height: number = 600
) {
  return `https://images.unsplash.com/photo-${imageId}?w=${width}&h=${height}&fit=crop&auto=format&q=80`
}

// Hero 섹션 추천 이미지 ID들
export const heroImages = {
  tech: "1461988320302-91bde64fc8e4", // 모던한 워크스페이스
  laptop: "1498050108023-c5248f4df94d", // 노트북과 코드
  minimal: "1618005182384-a83a8bd57fbe", // 미니멀한 셋업
  workspace: "1518770660439-4636190af475", // 깔끔한 데스크
}
