import './Layout.scss'
import Navbar from '../../components/navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Layout() {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export function RequireAuth() {
  const { currentUser } = useContext(AuthContext)

  if (!currentUser) return <Navigate to='/login' />
  else {
    return (
      <div className='layout'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    )
  }
}

// export { Layout, RequireAuth }
