"use client";

import { motion } from "motion/react";

import "./experience.scss";
import ExpLogo from "./ExpLogo";
import ExpJobs from "./ExpJobs";
import { AppWrap, MotionWrap } from "../wrapper";

const Experience = () => {
  return (
    <>
      <h2 className="head-text">
        Exper<span className="section__h1-span">ien</span>ces
      </h2>
      <motion.h3
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-filters experience__h2"
      >
        Milestones in My Career
      </motion.h3>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <ExpLogo img={"/javascript.png"} alt="Js" name="Javascript" />
          <ExpLogo img={"/react.png"} alt="react" name="React" />
          <ExpLogo img={"/redux.png"} alt="redux" name="Redux" />
          <ExpLogo img={"/node.png"} alt="node" name="Node" />
          <ExpLogo img={"/git.png"} alt="git" name="Git" />
        </motion.div>

        <motion.div className="app__skills-exp">
          <ExpJobs year="2021" name="Frontend Developer" company="AKIJ IBOS" />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "Experience",
  "app__primarybg"
);
