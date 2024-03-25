import { useState } from "react";
import styles from "./AddCategory.module.css";
export const AddCategory = ({ onAddCategory }) => {
  const [input, setinput] = useState("");
  const handleInputChange = (e) => {
    setinput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length <= 1) return;
    onAddCategory(input);
    setinput("");
  };
  return (
    <header className={styles.containerHeader}>
      <h1 className={styles.title}>Gif ExpertAPP</h1>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <input
          type="text"
          placeholder="Buscar gifs..."
          value={input}
          onChange={handleInputChange}
          className={styles.inputSearch}
        />

        <input type="submit" value="Buscar" className={styles.inputSubmit} />
      </form>
    </header>
  );
};
