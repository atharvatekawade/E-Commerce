import React from 'react'
import './button.scss'

const Button = (props) => (
  <div>
    {props.isGoogleSignIn &&
      <button className='google-sign-in custom-button' onClick={props.signInWithGoogle}>
        {props.children}
      </button> 
    }
    {!props.isGoogleSignIn &&
      <button className='custom-button' onClick={props.signInWithGoogle}>
        {props.children}
      </button> 
    }
  </div>
)

export default Button