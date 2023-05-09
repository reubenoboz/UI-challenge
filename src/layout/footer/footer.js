import React from "react";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import Instagram from "assets/images/instagram.svg";
import Facebook from "assets/images/facebook.svg";
import Twitter from "assets/images/twitter.svg";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerLinksContainer}>
        <div className={styles.box1}>
          <Logo />
        </div>
        <div className={styles.box2}>
          <div className={styles.title}>Get Started</div>
          <div>Documentation</div>
          <div>Pricing</div>
          <div>Tutorial</div>
          <div>Guides</div>
        </div>
        <div className={styles.box3}>
          <div className={styles.title}>Platforms</div>
          <div>Available on IOS</div>
          <div>Available on Android</div>
          <div>Available on Web</div>
        </div>
        <div className={styles.box4}>
          <div className={styles.title}>Newsletter</div>
          <div>
            Get curated content and design inspiration delivered straight to
            your inbox. <span className={styles.learnMore}>Learn more</span>
          </div>
          <form>
            <input placeholder="Your Email" type="email" />
            <input type="submit" />
          </form>
        </div>
      </div>

      <div className={styles.socialLinks}>
        <img src={Instagram} alt="Instagram handle" />
        <img src={Facebook} alt="Facebook handle" />
        <img src={Twitter} alt="Twitter handle" />
      </div>
      <div>
        <hr className="horizontal_line" />
      </div>

      <div className={styles.copyright}>
        Copyright 2018. <span className={styles.gravii}>Gravii</span>.
        <span className={styles.ng}>ng</span>. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
