import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { App } from '../views/App'
import { NotFound } from '../views/NotFound'

import { GroceryItemView } from '../views/GroceryItemView'

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          index
          element={<App />}
        />
        <Route
          path="/groceryItem"
          element={<GroceryItemView />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export { Router }
