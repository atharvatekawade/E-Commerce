import Homepage from './pages/Homepage/Homepage'
import Shoppage from './pages/Shoppage/Shoppage'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Sign from './components/Sign/Sign'

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={Shoppage} />
      <Route exact path='/sign' component={Sign} />
    </div>
  );
}

export default App;
