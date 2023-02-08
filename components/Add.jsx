import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState(null);
  const [extra, setExtras] = useState(null);
  const [extraOptions, setExtraOptions] = useState(null);

  const handleExtraInput = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          x
        </span>
        <h1>Add a new Pizza.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image./</label>
          <input type="file" />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title/</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc/</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <input
            className={`${styles.input} ${styles.inputSm}`}
            type="number"
            placeholder="Small"
            onChange={(e) => changePrice(e, 0)}
          />
          <input
            className={`${styles.input} ${styles.inputSm}`}
            type="number"
            placeholder="Medium"
            onChange={(e) => changePrice(e, 1)}
          />
          <input
            className={`${styles.input} ${styles.inputSm}`}
            type="number"
            placeholder="Large"
            onChange={(e) => changePrice(e, 2)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onchange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onchange={handleExtraInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
