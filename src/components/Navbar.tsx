import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="p-4">
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
