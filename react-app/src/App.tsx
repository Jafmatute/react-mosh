import { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState(['PRODUCT 1', 'PRODUCT 2']);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default App;
