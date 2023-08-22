import ListGroup from './components/ListGroup';

const App = () => {
  let items = ['new york', 'Tokio', 'Paris', 'Lodom'];

  return (
    <div>
      <ListGroup items={items} heading='Cities' />
    </div>
  );
};

export default App;
