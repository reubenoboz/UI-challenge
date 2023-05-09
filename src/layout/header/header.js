import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import Navlinks from "components/navlinks";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <header
      className={`${styles.header} ${
        scrollPosition > 0 ? styles.headerSolid : ""
      }`}
    >
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.links}>
          <Navlinks path="/" name="Product" />
          <Navlinks path="#" name="About Us" />
          <Navlinks path="#" name="Contact" />
        </div>
        <div className={`${styles.hamburger} hamburger`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <hr />
    </header>
  );
};

export default Header;

// className={`header ${scrollPosition > 0 ? 'header--solid' : ''}`}
