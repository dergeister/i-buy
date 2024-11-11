import { Outlet } from 'react-router-dom'

import { Navbar } from '../components/common/Navbar'

const DefaultLayout = () => {
  return (
    <main className="container px-2">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Outlet />
      </div>
    </main>
  )
}

export { DefaultLayout }
