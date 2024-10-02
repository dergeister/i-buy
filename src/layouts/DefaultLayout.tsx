import { Outlet } from 'react-router-dom'

import { Navbar } from '../components/Navbar'

const DefaultLayout = () => {
  return (
    <main className="container px-2">
      <Navbar />
      <Outlet />
    </main>
  )
}

export { DefaultLayout }
