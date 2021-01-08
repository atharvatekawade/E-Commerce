import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/config'

const Header = (props) => {
  return (
    <div className='header'>
      <Link to ="/">
        <Logo className='logo' />
      </Link>
      <div className='options'>
      <Link to ="/shop" className='option'>SHOP</Link>
      <Link to ="/contact" className='option'>CONTACT</Link>
      {props.currentUser && 
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
      }
      {!props.currentUser && 
        <Link to ="/sign" className='option'>SIGN IN</Link>
      }
      </div>
    </div>
  )
}

export default Header