import React,{ Component } from 'react'
import Sign from '../Sign/Sign'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/button'
import './SignIn.scss'
import { signInWithGoogle } from '../../firebase/config'

class SignIn extends Component
{
  constructor() {
    super();
    this.state={
      email:'',
      password:''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({email:'',password:''})
  }

  handleChange = (e) => {
    const { value,name }=e.target;
    this.setState({[name]:value})
  }

  render() {
    return(
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
          <div className='buttons'>
            <Button>Sign In</Button>
            <Button signInWithGoogle={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn