import { useState } from "react";
import { AddCategory, GifGrid, Footer } from "../components";
import styles from "./GifExpertApp.module.css";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState([]);

  const removeCategory = (cat) => {
    setcategories(categories.filter((c) => c !== cat));
  };

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  };

  return (
    <div className={styles.containerRoot}>
      <AddCategory onAddCategory={(cat) => onAddCategory(cat)} />

      {categories?.map((category) => (
        <GifGrid
          key={category}
          category={category}
          removeCategory={() => {
            removeCategory(category);
          }}
        />
      ))}

      <Footer categories={categories} />
    </div>
  );
};
