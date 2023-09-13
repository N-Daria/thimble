import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import { UsersContext } from "../../store/store";
import List from "../List/List";
import Actions from "../Actions/Actions";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={users}>
      <Actions />
      <List />
    </UsersContext.Provider>
  );
}

export default App;
