import { useEffect, useRef, useState } from "react"

export const useElementHeight = () => {
  const [elementHeight, setElementHeight] = useState<number>(0)
  const element = useRef<HTMLElement>(undefined)

  useEffect(() => {
    const getHeight = () => {
      if (element.current?.clientHeight) {
        setElementHeight(element.current?.clientHeight)
      }
    }
    getHeight()
  }, [])

  return {
    elementHeight,
    element,
  }
}
