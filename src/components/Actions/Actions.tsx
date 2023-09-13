import { useState, useContext } from "react";
import styles from "./Actions.module.css";
import { sendUser, getData, deleteUserList } from "../../api/api";
import { UsersContext, ThemeContext } from "../../store/store";

export default function Actions() {
  const { setUsers } = useContext(UsersContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const [form, setForm] = useState({
    name: "",
    age: "",
    subscription: "subscribed",
    employment: false,
    id: 0,
  });

  function serialize(name: string, value: string | number | boolean): void {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = Date.now();
    const userData = JSON.stringify({ ...form, id: id });

    try {
      sendUser(id.toString(), userData);
      setUsers(getData());
    } catch (e) {
      console.log(e);
    }

    // clear form
    setForm({
      name: "",
      age: "",
      subscription: "subscribed",
      employment: false,
      id: 0,
    });
  }

  function handleDelete() {
    try {
      deleteUserList();
      setUsers(getData());
    } catch (e) {
      console.log(e);
    }
  }

  function handleSwitchMode() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={form.name}
          type="text"
          placeholder="Name"
          name="name"
          required
          onChange={(e) => {
            serialize(e.target.name, e.target.value);
          }}
        />

        <input
          value={form.age}
          type="number"
          placeholder="Age"
          name="age"
          min={0}
          required
          onChange={(e) => {
            serialize(e.target.name, Number(e.target.value));
          }}
        />

        <select
          value={form.subscription}
          name="subscription"
          onChange={(e) => {
            serialize(e.target.name, e.target.value);
          }}
        >
          <option value="subscribed">Subscribed</option>
          <option value="not">Not Subscribed</option>
          <option value="other">Other</option>
        </select>

        <label>
          <input
            checked={form.employment}
            type="checkbox"
            name="employment"
            onChange={(e) => {
              serialize(e.target.name, e.target.checked);
            }}
          />
          <span>Employed</span>
        </label>

        <button type="submit">Insert</button>
      </form>

      <label>
        <input type="checkbox" onClick={handleSwitchMode} />
        <span>Mode</span>
      </label>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
