import { useState, MouseEvent } from 'react';

function ListGroup() {
  let items = ['new york', 'Tokio', 'Paris', 'Lodom'];

  const message = items.length === 0 && <p>Items not found</p>;

  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => setselectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
