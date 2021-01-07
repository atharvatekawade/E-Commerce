import Homepage from './pages/Homepage/Homepage'
import Shoppage from './pages/Shoppage/Shoppage'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={Shoppage} />
    </div>
  );
}

export default App;
