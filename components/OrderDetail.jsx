import styles from "../styles/OrderDetail.module.css";
import { useState } from "react";

const OrderDetail = ({total, createOrder}) => {
  const [address, setAddress] = useState("");
  const [customer, setCustomer] = useState("");

  const handleClick = () => {
    createOrder({customer, address, total, method: 0});
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}> Name Surname</label>
          <input
            type="text"
            placeholder="John Doe"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          ></input>
        </div>
        <div className={styles.item}>
          <label className={styles.label}> Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 8901"
            className={styles.input}
            // onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div className={styles.item}>
          <label className={styles.label}> Address</label>
          <input
            type="text"
            placeholder="123 st sw"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
