import styles from "./ListRow.module.css";
import { UserData } from "../../store/store";

export default function ListRow(data: UserData) {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.subscription}</td>
      <td>{data.employment}</td>
    </tr>
  );
}
