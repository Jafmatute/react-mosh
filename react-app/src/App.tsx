import Alert from './components/Alert';
import Buttom from './components/Buttom';
import { useState } from 'react';

const App = () => {
  const [alertVisible, setalertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setalertVisibility(!alertVisible)}>
          Bienvenido
        </Alert>
      )}
      <Buttom onClick={() => setalertVisibility(!alertVisible)}>
        Mostrar alerta
      </Buttom>
    </div>
  );
};

export default App;
