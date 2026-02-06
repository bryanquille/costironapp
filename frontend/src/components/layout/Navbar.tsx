function Navbar() {
  return (
    <nav className="hidden bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 py-2">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-primary hover:underline">Características</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">Materiales</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">Precios</a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar