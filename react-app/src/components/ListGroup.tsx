function ListGroup() {
  const items = ['new york', 'Tokio', 'Paris', 'Lodom'];

  return (
    <>
      <h1>List</h1>
      <ul className='list-group'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
