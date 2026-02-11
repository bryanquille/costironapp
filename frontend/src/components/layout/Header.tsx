import { PrecisionManufacturingIcon } from "../common/Icons"
import Navbar from "./Navbar"
import { useElementHeight } from "../../hooks/useElementHeight"
import { useHambMenu } from "../../hooks/useHambMenu"
import HamburguerMenu from "./HamburguerMenu"

function Header() {
  const { isHambMenuOpen, closeHambMenu, toggleHambMenu } = useHambMenu()
  const { elementHeight, element } = useElementHeight()

  return (
    <header
      className="fixed w-full px-6 py-4 flex justify-between items-center gap-4 shadow-sm shadow-violet-300"
      ref={element as React.RefObject<HTMLElement>}
    >
      <div className="flex flex-row-reverse justify-between items-center gap-2">
        <h2 className="font-bold text-2xl">CostIron</h2>
        <PrecisionManufacturingIcon />
      </div>
      <HamburguerMenu
        isHambMenuOpen={isHambMenuOpen}
        toggleHambMenu={toggleHambMenu}
      />
      <Navbar
        closeHambMenu={closeHambMenu}
        isHambMenuOpen={isHambMenuOpen}
        headerHeight={elementHeight}
      />
    </header>
  )
}

export default Header