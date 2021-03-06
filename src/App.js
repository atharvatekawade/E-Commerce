import React,{ Component } from 'react'
import Homepage from './pages/Homepage/Homepage'
import Shoppage from './pages/Shoppage/Shoppage'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Sign from './components/Sign/Sign'
import { auth } from './firebase/config'
import Test from './Test'

class App extends Component {
  constructor() {
    super();
    this.state={
      currentUser:null,
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


  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Route path='/' exact component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/sign' component={Sign} />
      </div>
    );
  }
}

export default App;
