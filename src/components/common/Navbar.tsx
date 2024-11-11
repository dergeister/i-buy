import { Link } from 'react-router-dom'

type NavigationLink = {
  label: string
  to: string
}

const Navbar = () => {
  const navLinks: NavigationLink[] = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'Items',
      to: 'groceryItem'
    }
  ]

  return (
    <nav className="p-4">
      <ul className="flex gap-4 justify-center">
        {navLinks.map((navLink, index) => {
          return (
            <li
              key={`nav-link-${index}`}
              className="border-b-2 border-transparent hover:border-gray-400 cursor-pointer"
            >
              <Link to={navLink.to}>{navLink.label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { Navbar }
