import React,{ Component } from 'react'
import Homepage from './pages/Homepage/Homepage'
import Shoppage from './pages/Shoppage/Shoppage'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Sign from './components/Sign/Sign'
import { auth } from './firebase/config'


class Test extends Component {
  constructor() {
    super();
    this.state={
      currentUser:null,
      toggle:true
    }
  }

  unsubscribe=null;

  componentDidMount() {
    //window.addEventListener('beforeunload', this.componentWillUnmount);
    this.unsubscribe=auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  toggle = () => {
    this.setState({toggle:!this.state.toggle})
  }

  componentWillUnmount() {
    this.unsubscribe();
    console.log('Will unmount')
  }
  render() {
    return (
      <div>
        <Header />
        <button onClick={this.toggle} />
        {this.state.test && 
          <Test />
        }
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/sign' component={Sign} />
      </div>
    );
  }
}

export default Test;
