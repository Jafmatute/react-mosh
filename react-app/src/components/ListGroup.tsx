import { MouseEvent } from 'react';
function ListGroup() {
  let items = ['new york', 'Tokio', 'Paris', 'Lodom'];

  const message = items.length === 0 && <p>Items not found</p>;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li className='list-group-item' key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
