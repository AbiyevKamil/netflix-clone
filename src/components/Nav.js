import React, { useState, useEffect } from "react";
import "../styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className={"nav-logo"}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        }
        alt="netflix-logo"
      />
      <img
        className={"nav-avatar"}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        }
        alt="netflix-avatar"
      />
    </div>
  );
}

export default Nav;
