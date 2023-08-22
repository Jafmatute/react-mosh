function ListGroup() {
  let items = ['new york', 'Tokio', 'Paris', 'Lodom'];

  const message = items.length === 0 && <p>Items not found</p>;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className='list-group'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
