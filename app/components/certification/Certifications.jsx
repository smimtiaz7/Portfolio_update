"use client";

import { motion } from "motion/react";

import { certifications } from "./certifications";
import CertificationItem from "./CertificationItem";
import "./certifications.scss";
import { AppWrap, MotionWrap } from "../wrapper";

const Certifications = () => {
  return (
    <section className="certification__section" id="#Certifications">
      <h2 className="head-text">
        My Certi<span>fica</span>tions
      </h2>
      <motion.h3
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certifications-subtitle"
      >
        Acquired knowledge through learning and development
      </motion.h3>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certifications-container"
      >
        {certifications.length !== 0 &&
          certifications.map((item) => (
            <CertificationItem
              key={item?.id}
              certImg={item?.img.img}
              certLink={item?.link}
              description={item?.completed}
              title={item?.title}
            />
          ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Certifications, "app__certifications"),
  "Certifications",
  "app__primarybg"
);
