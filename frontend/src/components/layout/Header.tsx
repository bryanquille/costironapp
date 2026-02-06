import { PrecisionManufacturingIcon } from "../common/Icons"
import Navbar from "./Navbar"

function Header() {
  return (
    <header
      className="fixed w-full px-6 py-4 flex justify-between items-center gap-4 shadow-sm shadow-sky-200"
    >
      <div className="flex flex-row-reverse justify-between items-center gap-2">
        <h2 className="font-bold text-2xl">CostIron</h2>
        <PrecisionManufacturingIcon />
      </div>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        className="cursor-pointer flex flex-col justify-center items-center gap-1.5"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <Navbar />
    </header>
  )
}

export default Header