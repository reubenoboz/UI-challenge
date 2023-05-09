import React from "react";
import styles from "./clients.module.scss";
import Skype from "assets/images/skype.svg";
import Visa from "assets/images/visa.svg";
import Cocacola from "assets/images/cocacola.svg";
import Google from "assets/images/google.svg";
import Puma from "assets/images/puma.svg";
import Adidas from "assets/images/adidas.svg";
import Samsung from "assets/images/samsung.svg";

const clients = [Skype, Visa, Cocacola, Google, Puma, Adidas, Samsung];

const Clients = () => {
  return (
    <div className={styles.clientWrapper}>
      <div className={styles.text}>Trusted by</div>
      <div className={styles.images}>
        {clients.map((client, index) => (
          <img src={client} key={index} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Clients;
