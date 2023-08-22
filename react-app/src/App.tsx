import ListGroup from './components/ListGroup';

const App = () => {
  let items = ['new york', 'Tokio', 'Paris', 'Lodom'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
