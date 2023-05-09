import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import Navlinks from "components/navlinks";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  console.log(showMobileMenu);

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
        <div
          className={`${styles.hamburger} hamburger`}
          onClick={handleMobileMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <hr />

      {/* Mobile menu */}
      <div
        className={`${styles.overlay} ${
          showMobileMenu ? styles.show : styles.hidden
        }`}
      >
        <div>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div
              className={`${styles.hamburger} hamburger`}
              onClick={handleMobileMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
        <div className={styles.mobileMenu} onClick={handleMobileMenuClick}>
          <Navlinks path="/" name="Product" />
          <Navlinks path="#" name="About Us" />
          <Navlinks path="#" name="Contact" />
        </div>
      </div>
    </header>
  );
};

export default Header;

// className={`header ${scrollPosition > 0 ? 'header--solid' : ''}`}
