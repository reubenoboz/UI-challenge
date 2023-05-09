import React from "react";
import styles from "./banner.module.scss";
import { ReactComponent as BannerIcon } from "assets/icons/group2.svg";

const Banner = () => {
  return (
    <>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerMessage}>
          <div>
            <BannerIcon />
          </div>
          <h1 className={styles.bannerTitle}>
            Guaranteed to give you the best experience in <br />{" "}
            <span>banking</span>
          </h1>
          <div className={styles.bannerText}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </div>
          <div className={`${styles.bannerAction} links`}>Get Started</div>
        </div>
      </div>

      <div className={styles.mobilebBannerMessage}>
        <div>
          <BannerIcon />
        </div>
        <h1 className={styles.bannerTitle}>
          Guaranteed to give you the best experience in <br />{" "}
          <span>banking</span>
        </h1>
        <div className={styles.bannerText}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </div>
        <div className={`${styles.bannerAction} links`}>Get Started</div>
      </div>
    </>
  );
};

export default Banner;
