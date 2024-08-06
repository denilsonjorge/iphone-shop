import {Route, Routes} from 'react-router-dom';

import Store from './pages/Store';
import Cart from './pages/Cart';
function Content() {
  return ( 
    <Routes>
      <Route exact path="/" element={<Store/>}/>
      <Route exact path='/cart'element={<Cart/>}/>
    </Routes>

   );
}

export default Content;