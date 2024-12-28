"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./navbar.scss";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link href="#Home">IMTIAZ</Link>
      </div>
      <ul className="app__navbar-links">
        {[
          "Home",
          "About",
          "Portfolio",
          "Skills",
          "Experience",
          "Certifications",
          "Contact",
        ].map((item) => [
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>,
        ])}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="app__navbar-links">
              {[
                "Home",
                "About",
                "Portfolio",
                "Skills",
                "Experience",
                "Certifications",
                "Contact",
              ].map((item) => [
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {item}
                  </Link>
                </li>,
              ])}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
