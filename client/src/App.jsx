import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './routes/layout/Layout'
import Homepage from './routes/homePage/Homepage'
import ListPage from './routes/listPage/ListPage'
import SinglePage from './routes/singlePage/SinglePage'
import ProfilePage from './routes/profilePage/ProfilePage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Homepage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
