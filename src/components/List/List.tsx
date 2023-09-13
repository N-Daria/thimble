import style from "./List.module.css";
import ListRow from "../ListRow/ListRow";
import { useContext } from "react";
import { UserData, UsersContext } from "../../store/store";

export default function List() {
  const users = useContext(UsersContext);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Subscription</th>
            <th>Employment</th>
          </tr>
        </thead>
        <tbody>
          {users.users?.map((user: UserData) => (
            <ListRow {...user} key={user.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
