import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 made by Ankit Singh. All rights reserved.</div>
      <div className={styles.social}>

        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Ankit Singh" />
        </a>

      </div>
    </div>
  );
};

export default Footer;
