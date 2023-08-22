import Buttom from './components/Buttom';

const App = () => {
  return (
    <div>
      <Buttom onClick={() => console.log('Clicked')}>Guardar</Buttom>
    </div>
  );
};

export default App;
