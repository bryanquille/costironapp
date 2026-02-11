type NavbarPropsTypes = {
  isHambMenuOpen: boolean
  closeHambMenu: () => void
  headerHeight: number
}

function Navbar({ isHambMenuOpen, closeHambMenu, headerHeight }: NavbarPropsTypes) {
  return (
    <nav
      className={`
        absolute right-0 p-10
        bg-background-light transition-all duration-300 transform 
        ${isHambMenuOpen ? 'translate-x-0' : 'translate-x-[200%]'}
        dark:bg-background-dark dark:shadow-sm dark:shadow-violet-300
      `}
      style={{
        top: `${headerHeight + 2}px`
      }}
    >
      <ul className="flex flex-col justify-evenly items-end gap-6">
        <li>
          <a
            href="#"
            className="text-primary text-xl hover:underline"
            onClick={closeHambMenu}
          >
            Características
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary text-xl hover:underline"
            onClick={closeHambMenu}
          >
            Materiales
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary text-xl hover:underline"
            onClick={closeHambMenu}
          >
            Precios
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary text-xl hover:underline"
            onClick={closeHambMenu}
          >
            Nosotros
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar