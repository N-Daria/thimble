import { useState, useContext } from "react";
import styles from "./Actions.module.css";
import { sendUser, getData, deleteUser } from "../../api/api";
import {
  UsersContext,
  ThemeContext,
  UserData,
  formState,
  CurrentUserContext,
} from "../../store/store";

export default function Actions() {
  const { setUsers } = useContext(UsersContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { currentUser } = useContext(CurrentUserContext);

  const [form, setForm] = useState<formState>({
    name: "",
    age: "",
    subscription: "subscribed",
    employment: false,
  });

  function serialize(name: string, value: string | number | boolean): void {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = Date.now();

    const userData = JSON.stringify({
      name: form.name || "Name",
      age: form.age,
      subscription: form.subscription,
      employment: form.employment ? "Employed" : "Unmployed",
      id: id,
    });

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
    });
  }

  function handleDelete() {
    if (currentUser) {
      try {
        deleteUser(currentUser.id.toString());
        setUsers(getData());
      } catch (e) {
        console.log(e);
      }
    }
  }

  function handleSwitchMode() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className={`${styles.section} ${styles[theme]}`}>
      <h2 className={styles.header}>Insert Row</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <input
          className={styles.input}
          value={form.name}
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => {
            serialize(e.target.name, e.target.value);
          }}
        />

        <div className={styles.numberInput}>
          <input
            className={styles.input}
            value={form.age}
            type="number"
            placeholder="Age"
            name="age"
            min={18}
            required
            onChange={(e) => {
              serialize(e.target.name, Number(e.target.value));
            }}
          />

          <button
            className={`${styles.numberButton} ${styles.numberSubstract}`}
            type="button"
            onClick={() => {
              if (Number(form.age) > 18) {
                serialize("age", Number(form.age) - 1);
              }
            }}
          ></button>

          <button
            className={`${styles.numberButton} ${styles.numberAdd}`}
            type="button"
            onClick={() => {
              if (Number(form.age) >= 18) {
                serialize("age", Number(form.age) + 1);
              } else {
                serialize("age", 18);
              }
            }}
          ></button>
        </div>

        <div className={styles.selectBox}>
          <select
            className={`${styles.input} ${styles.select}`}
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
        </div>

        <label className={styles.checkboxBlock}>
          <input
            className={styles.checkbox}
            checked={form.employment}
            type="checkbox"
            name="employment"
            onChange={(e) => {
              if (e.target.checked) {
                serialize(e.target.name, true);
              } else {
                serialize(e.target.name, false);
              }
            }}
          />
          <span className={styles.checkmark} />
          <span className={styles.checkboxText}>Employed</span>
        </label>

        <button type="submit" className={styles.button}>
          Insert
        </button>
      </form>

      <label className={styles.switchBox}>
        <span className={styles.switchText}>Mode</span>
        <input
          className={styles.switcher}
          type="checkbox"
          onClick={handleSwitchMode}
        />
        <span className={styles.slider} />
      </label>

      <button type="button" onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
}
