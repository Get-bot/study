import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {

  const deleteUserHandler = (e) => {
    const id = e.target.dataset.key;
    props.ondelete(id);
  };

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.length === 0 && <p>No users found.</p>}
        {props.users.map((user) => (
          <li key={user.id} data-key={user.id} onClick={deleteUserHandler}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
