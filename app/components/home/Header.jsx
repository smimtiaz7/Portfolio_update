"use client";
import { motion } from "motion/react";
import Image from "next/image";

import "./header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const imageScaleVariants = {
  whileInView: { scale: [0, 1] },
  transition: { duration: 1, ease: "easeInOut" },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: "20px" }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Imtiaz</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">MERN Stack</p>
            <p className="p-text">Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <Image
          width={623}
          height={782}
          quality={100}
          src="/profile.png"
          alt="Profile"
        />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
        >
          <Image
            src="/circle.svg"
            alt="Circle"
            className="overlay_circle"
            width={623}
            height={704}
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {["/react.png", "/node.png", "/sass.png"].map((image, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <Image src={image} alt="circle" width={500} height={500} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
