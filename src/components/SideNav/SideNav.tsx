import React from 'react'
import './SideNav.css'
import SideNavFooter from '../SideNavFooter/SideNavFooter'
import { NavLink } from 'react-router-dom'

function SideNav() {
  return (
    <>
      <div className="side-nav">
        <nav className="side-nav__navigation">
          <ul className="side-nav__navigation__list">
            <li className="side-nav__navigation__list__menu">
              <NavLink to="/">Aphorisms</NavLink>
            </li>
            <li className="side-nav__navigation__list__menu">
              <NavLink to="/aphorisms/new">Post</NavLink>
            </li>
            <li className="side-nav__navigation__list__menu">
              <NavLink to="/users">Users - for Admin</NavLink>
            </li>
            <li className="side-nav__navigation__list__menu">
              <NavLink to="/profile">Profile - for User</NavLink>
            </li>
            <li className="side-nav__navigation__list__menu">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <SideNavFooter />
    </>
  )
}

export default SideNav
