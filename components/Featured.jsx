import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" alt="" width="10px" height="10px" />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => {
            <Image
              src="/img/featured.png"
              key={i}
              alt=""
              width="10px"
              layout="fill"
            />;
          })}
        </div>
      </div>

      <Image src="/img/arrowr.png" alt="" width="10px" height="10px" />
    </div>
  );
};

export default Featured;
