type HamburguerMenuPropsTypes = {
  isHambMenuOpen: boolean
  toggleHambMenu: () => void
}

function HamburguerMenu({ isHambMenuOpen, toggleHambMenu }: HamburguerMenuPropsTypes) {
  return (
    <button
      type="button"
      aria-label="Toggle navigation menu"
      className="cursor-pointer flex flex-col justify-center items-center gap-1.5"
      onClick={toggleHambMenu}
    >
      <span
        className={`
            bar transition-all duration-300 transform
            ${isHambMenuOpen ? 'rotate-45 translate-y-2.5' : 'rotate-0'}
          `}
      ></span>
      <span
        className={`
            bar transition-all duration-100 
            ${isHambMenuOpen ? 'invisible' : 'visible'}
          `}
      ></span>
      <span
        className={`
            bar transition-all duration-300 transform
            ${isHambMenuOpen ? '-rotate-45 -translate-y-2.5' : 'rotate-0'}
          `}
      ></span>
    </button>
  )
}

export default HamburguerMenu