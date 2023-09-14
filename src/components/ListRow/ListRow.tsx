import { useContext } from "react";
import styles from "./ListRow.module.css";
import { CurrentUserContext, UserData } from "../../store/store";

export default function ListRow(data: UserData) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  let isChecked: string = styles.rowNotClicked;

  if (currentUser?.id === data.id) {
    isChecked = styles.rowClicked;
  }

  function rowClick() {
    setCurrentUser(data);
  }

  return (
    <tr className={`${styles.row} ${isChecked}`} onClick={rowClick}>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.subscription}</td>
      <td>{data.employment}</td>
    </tr>
  );
}
