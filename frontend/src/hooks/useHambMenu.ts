import { useState } from "react"

export const useHambMenu = () => {
  const [isHambMenuOpen, setIsHambMenuOpen] = useState(false)

  const closeHambMenu = () => setIsHambMenuOpen(false)
  const toggleHambMenu = () => setIsHambMenuOpen((prev) => !prev)

  return {
    isHambMenuOpen,
    closeHambMenu,
    toggleHambMenu,
  }
}
