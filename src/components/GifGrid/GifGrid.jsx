import { GifCard } from "../GifCards/GifCard";
import styles from "./GifGrid.module.css";
import { useFetchGifs } from "../../hooks/useFetchGifs";
export const GifGrid = ({ category, removeCategory }) => {
  //Custom Hooks

  const { images, isLoading } = useFetchGifs(category);

  console.log(images);
  return (
    <div className={styles.gridGifContainer}>
      <div className={styles.gridHeader}>
        <h2 className={styles.gridTitle}>{category.toUpperCase()}</h2>
        <button
          className={styles.gridButtonClose}
          onClick={() => {
            removeCategory(category);
          }}
        >
          X
        </button>
      </div>
      <div className={styles.gridCardsContainer}>
        {images?.map(({ url, id, title }) => (
          <GifCard url={url} key={id} title={title} />
        ))}
      </div>
    </div>
  );
};
