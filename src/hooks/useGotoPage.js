import { useRouter } from 'next/router'
import { useCallback } from 'react'

function useGotoPage(url) {
  const router = useRouter()
  const goToPage =useCallback(
      e=>{
          e.stopPropagation()
          router.push(url)
      },
      [router,url]
  )
    return goToPage
}

export default useGotoPage;