import styles from "../styles/OrderDetailed.module.css";
const OrderDetailed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
            <label ></label>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailed;
