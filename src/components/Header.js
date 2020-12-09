import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Home!</Link>
      </div>
      <h3>NOVID-19</h3>
      <div className="links">
        <ul>
          {props.currentUser ?
            <>
              <li><Link to={'/mystates'}>My States</Link></li>
              <li><a href="/logout" onClick={props.logout}>Log Out</a></li>
            </>
            :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  )
}

export default Header
