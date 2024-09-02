// import HomePage from './routes/homePage/homePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout, { RequireAuth } from './routes/layout/Layout';

import ProfileUpdatePage from './routes/profilePage/ProfilePage';
import NewPostPage from './routes/newPostPage/newPostPage';

import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';

import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from './lib/loaders';
import ProfilePage from './routes/profilePage/ProfilePage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import HomePage from './routes/homePage/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: '/:id',
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />,
        },
        {
          path: '/add',
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
