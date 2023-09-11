import style from "./List.module.css";
import ListRow from "../ListRow/ListRow";

import { mockData } from "../../store/store";

export default function List() {
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
          {mockData.data &&
            mockData.data.map((user) => <ListRow {...user} key={user.id} />)}
        </tbody>
      </table>
    </>
  );
}
