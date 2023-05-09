import React from "react";
import styles from "./navlinks.module.scss";
import { Link, useLocation } from "react-router-dom";

const Navlinks = ({ path, name }) => {
  const location = useLocation();

  return (
    <Link
      className={`${styles.navlink} ${
        location.pathname === path ? styles.active : ""
      }`}
      to={path}
    >
      {name}
    </Link>
  );
};

export default Navlinks;
