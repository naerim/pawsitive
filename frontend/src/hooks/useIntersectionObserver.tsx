import { InfiniteQueryObserverResult } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import * as console from 'console'

interface UseIntersectionObserverPropType {
  threshold?: number
  hasNextPage: boolean | undefined
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>
}

export const useIntersectionObserver = ({
  threshold = 0.2,
  hasNextPage,
  fetchNextPage,
}: UseIntersectionObserverPropType) => {
  // 관찰할 요소, 스크롤 최하단 div요소에 setTarget을 ref로 넣어 사용할 것
  const [target, setTarget] = useState<HTMLDivElement | null>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const observerCallback: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      // target이 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage().then(r => r)
      }
    })
  }
  useEffect(() => {
    if (!target) return
    console.log(target)
    // intersection observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, { threshold })
    // 타겟 관찰 시작
    observer.observe(target)
    // 관찰 멈춤
    // eslint-disable-next-line consistent-return
    return () => observer.unobserve(target)
  }, [observerCallback, threshold, target])
  return { setTarget }
}
