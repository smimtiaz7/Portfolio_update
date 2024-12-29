"use client";

import Image from "next/image";
import { motion } from "motion/react";
import "./home.scss";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container" id="Home">
      <motion.div
        className="headline"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span>My Portfolio</span>
      </motion.div>

      <motion.p
        className="subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Elevate your digital presence with innovative web solutions. I
        specialize in creating dynamic, user-friendly applications using the
        latest technologies.
      </motion.p>

      <motion.div
        className="tech-icons"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Image src="/react.png" alt="React Logo" width={1000} height={1000} />
        <Image src="/next.webp" alt="Next.js Logo" width={1000} height={1000} />
        <Image src="/redux.png" alt="Redux Logo" width={1000} height={1000} />
        <Image src="/node.png" alt="Node.js Logo" width={1000} height={1000} />
      </motion.div>

      <motion.div
        className="cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <button>
          <Link href={"#Portfolio"}>Explore My Work</Link>
        </button>
        <button>
          <Link href={"#Contact"}>Contact Me</Link>
        </button>
      </motion.div>

      <motion.div
        className="testimonial"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        "Crafting digital experiences that seamlessly blend innovation, design,
        and functionality, leaving a lasting impression"
      </motion.div>

      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:imtiaz.array@gmail.com">
          <FaEnvelope />
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
