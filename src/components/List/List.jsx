import { Element } from '../User/User';

export const List = ({ data, deleteUser }) => {
  return (
    <ul>
      {data.map(element => (
        <li key={element.id}>
          <Element element={element} deleteUser={deleteUser} />
        </li>
      ))}
    </ul>
  );
};
