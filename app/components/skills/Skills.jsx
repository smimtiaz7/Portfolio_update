"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import "./Skills.scss";
import { AppWrap, MotionWrap } from "../wrapper";

function LoadingProgressBar({ limit, name, bgColor }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= limit) {
          clearInterval(interval);
          return limit;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [limit]);

  const progressBarContainerStyle = {
    height: "20px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#d8d8d8",
    margin: "50px 0",
  };

  const progressBarStyle = {
    borderRadius: "20px",
    color: "#000",
    fontSize: "0.8em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: `${progress}%`,
    height: "100%",
    background: bgColor,
    transition: "width 0.3s ease",
  };

  return (
    <div className="skills__main">
      <h3>{name}</h3>
      <div className="progress-bar-container" style={progressBarContainerStyle}>
        <div style={progressBarStyle}>{progress}%</div>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        Ski<span className="section__h1-span">l</span>ls
      </h2>
      <motion.h3
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-filters  skills__h2"
      >
        Skills That Empower My Creations
      </motion.h3>
      <div className="app__skill-container">
        <div className="skills__progress-component">
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #ff8177, #ff867a, #ff8c7f, #f99185, #cf556c)"
            name="HTML"
            limit="90"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #00c6ff, #0072ff)"
            name="CSS"
            limit="80"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to left, #ff9966, #ff5e62)"
            name="JavaScript"
            limit="90"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #fbc2eb, #a6c1ee)"
            name="Bootstrap"
            limit="80"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #56ab2f, #a8e063)"
            name="React"
            limit="90"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #f7971e, #ffd200)"
            name="Redux"
            limit="75"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to left, #4ca1af, #c4e0e5)"
            name="Node.js"
            limit="85"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #e14fad, #f9d423)"
            name="MongoDB"
            limit="75"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #ffdde1, #ee9ca7)"
            name="NextJS"
            limit="85"
          />
          <LoadingProgressBar
            bgColor="linear-gradient(to right, #c2e59c, #64b3f4)"
            name="Tailwind"
            limit="60"
          />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skill"),
  "Skills",
  "app__whitebg"
);
