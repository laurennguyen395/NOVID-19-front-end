import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}><i className="fas fa-virus fa-4x"></i>  NOVID-19</Link>
      </div>
      <div className="links">
        <ul>
          {props.currentUser ?
            <>
              <li><Link to={'/mystates'}>My States</Link></li>
              <li><a href="/logout" onClick={props.logout}>Log Out</a></li>
            </>
            :
            <>
              <li className='reg'><Link to={'/register'}>Register</Link></li>
              <li className='login'><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  )
}

export default Header
