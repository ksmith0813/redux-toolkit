import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'

export const Navigation = () => {
  const [activePage, setActivePage] = useState('dogs')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') navigate('../dogs')
    setActivePage(location.pathname.substring(1))
  }, [location.pathname, navigate])

  const SiteLink = ({ page, title }) => <Link to={`/${page}`}>{title}</Link>

  return (
    <>
      <Menu mode='horizontal' selectedKeys={[activePage]}>
        <Menu.Item key='dogs'>
          <SiteLink page='dogs' title='Dogs' />
        </Menu.Item>
        <Menu.Item key='cats'>
          <SiteLink page='cats' title='Cats' />
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  )
}
