import { useState } from "react";
import styles from "./Actions.module.css";

export default function Actions() {
  const [form, setForm] = useState({
    name: "",
    age: 1,
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
    localStorage.setItem(id.toString(), userData);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          onChange={(e) => {
            serialize(e.target.name, e.target.value);
          }}
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          min={1}
          required
          onChange={(e) => {
            serialize(e.target.name, Number(e.target.value));
          }}
        />

        <select
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
        <input type="checkbox" />
        <span>Mode</span>
      </label>

      <button type="button">Delete</button>
    </div>
  );
}
