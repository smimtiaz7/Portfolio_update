"use client";

import { motion } from "motion/react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { useState } from "react";

import "./portfolio.scss";
import Image from "next/image";
import Link from "next/link";

const Work = ({
  portfolioImg,
  projectLink,
  title,
  description,
  tags,
  githubLink,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div
        className="app__work-item app__flex"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="app__work-img app__flex">
          <Image src={portfolioImg} alt="Works" width={1000} height={1000} />
          <motion.div
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="app__work-hover app__flex"
          >
            <Link href={projectLink} target="_blank" rel="noreferrer">
              <motion.div
                animate={{ scale: isHovering ? 1 : 0 }}
                whileHover={{ scale: 0.9 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </Link>
            <Link href={githubLink} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__flex"
              >
                <AiFillGithub />
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <div className="app__work-content app__flex">
          <h4 className="bold-text">{title}</h4>
          <p className="p-text" style={{ marginTop: 10 }}>
            {description}
          </p>

          <div className="app__work-tag app__flex">
            <p className="p-text">{tags}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
