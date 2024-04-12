import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';


const SideBar = ({ showSideBar }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const menuItems = [
    { id: 1, title: 'Home', path: '/home' },
    { id: 2, title: 'Posted', path: '/posted' },
    { id: 3, title: 'Add News', path: '/add' },
    { id: 4, title: 'Profile', path: '/profile' },
    { id: 5, title: 'Logout', path: '/logout' },
  ]
  const logout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <div
      className={`min-h-screen max-h-full transition-all duration-300 bg-primary h-screen flex flex-col overflow-hidden ${showSideBar ? 'w-48' : 'w-0'
        } `}
    >
      <div>
        <h1 className="text-white text-3xl font-bold mt-10 ml-10">News</h1>
      </div>
      <div className="flex flex-col mt-20 ">
        {menuItems.map((item) => {
          return item.title !== 'Logout' ? (
            <Link
              to={`${item.path}`}
              key={item.id}
              className={`pl-10 py-5 text-gray-400 hover:bg-gray-50 hover:text-gray-700 text-sm
               ${location.pathname.includes(item.path) &&
                'bg-[#145c2aaf] text-yellow-200 font-bold'
                }
              `}
            >
              {item.title}
            </Link>
          ) : (
            <span
              key={item.id}
              onClick={logout}
              className="pl-10 py-5 text-gray-400 hover:bg-gray-50 hover:text-gray-700 text-sm cursor-pointer"
            >
              Logout
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar;