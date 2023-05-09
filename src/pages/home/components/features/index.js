import React from "react";
import PencilCase from "assets/icons/pencil-case.svg";
import Scalability from "assets/icons/scalability.svg";
import Fingerprint from "assets/icons/fingerprint.svg";
import { Link } from "react-router-dom";
import styles from "./features.module.scss";

const featureList = [
  {
    img: PencilCase,
    title: "Designed with everyone in mind",
    body: "Get curated content and design inspiration delivered straight to your inbox.",
    learnMore: "/#",
  },
  {
    img: Scalability,
    title: "Scalability",
    body: "Get curated content and design inspiration delivered straight to your inbox.",
    learnMore: "/#",
  },
  {
    img: Fingerprint,
    title: "Security",
    body: "Get curated content and design inspiration delivered straight to your inbox.",
    learnMore: "/#",
  },
];

const Features = () => {
  return (
    <div className={styles.featuresWrapper}>
      <div className={styles.title}>Features</div>
      <h2 className={styles.heading}>Designed with everyone in mind</h2>
      <div className={styles.feature}>
        {featureList.map((feature, index) => {
          return (
            <div key={index} className={styles.featureItem}>
              <img src={feature.img} alt="" />
              <div className={styles.featureItemTitle}>{feature.title}</div>
              <div className={styles.featureItemBody}>{feature.body}</div>
              <div className={styles.learnMoreWrapper}>
                <Link className={styles.learnMore} to="#">
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
