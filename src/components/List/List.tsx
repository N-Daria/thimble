import styles from "./List.module.css";
import ListRow from "../ListRow/ListRow";
import { useContext } from "react";
import { ThemeContext, UserData, UsersContext } from "../../store/store";

export default function List() {
  const users = useContext(UsersContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.tableBox} ${styles[theme]}`}>
      <table className={styles.tableHeader}>
        <thead>
          <tr>
            <th className={styles.headerText}>Name</th>
            <th className={styles.headerText}>Age</th>
            <th className={styles.headerText}>Subscription</th>
            <th className={styles.headerText}>Employment</th>
          </tr>
        </thead>
      </table>

      <div className={styles.scroll}>
        <table className={styles.table}>
          <tbody>
            {users.users?.map((user: UserData) => (
              <ListRow {...user} key={user.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
