import { useEffect, useState } from "react";
import styles from "./App.module.css";
import {
  UsersContext,
  UserData,
  ThemeContext,
  CurrentUserContext,
} from "../../store/store";
import List from "../List/List";
import Actions from "../Actions/Actions";
import { getData } from "../../api/api";

function App() {
  const [users, setUsers] = useState<UserData[] | null>(null);
  const [theme, setTheme] = useState("dark");
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    // initial rendering
    setUsers(getData);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UsersContext.Provider value={{ users, setUsers }}>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <main className={`${styles.app} ${styles[theme]}`}>
            <div className={styles.content}>
              <Actions />
              <List />
            </div>
          </main>
        </CurrentUserContext.Provider>
      </UsersContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
