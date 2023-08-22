import Like from './components/Like';

const App = () => {
  return (
    <div>
      <Like onClick={() => console.log('clicked')} />
    </div>
  );
};

export default App;
