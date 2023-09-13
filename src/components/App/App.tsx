import { useEffect } from "react";
import { useState } from "react";
import styles from "./App.module.css";
import { UsersContext, UserData } from "../../store/store";
import List from "../List/List";
import Actions from "../Actions/Actions";
import { getData } from "../../api/api";

function App() {
  const [users, setUsers] = useState<UserData[] | null>(null);

  useEffect(() => {
    // initial rendering
    setUsers(getData);
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <Actions />
      <List />
    </UsersContext.Provider>
  );
}

export default App;
