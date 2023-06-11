export const Element = ({ element: { name, email, id }, deleteUser }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </>
  );
};
