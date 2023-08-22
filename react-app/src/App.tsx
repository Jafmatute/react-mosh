import ListGroup from './components/ListGroup';

import { items } from './data/DataCountries';

const App = () => {
  return (
    <div>
      <ListGroup items={items} heading='Miami' onSelectItem={() => {}} />
    </div>
  );
};

export default App;
