"use client";

import React from "react";
import Image from "next/image";
import styles from "./aboutme.module.css";

export default function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.avatarWrapper}>
          <Image
            src="/img/img_aboutme.png"
            alt="About Me Avatar"
            fill
            priority
            className={styles.avatar}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.introduction}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
              height: "50px",
              padding: "6px",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <h1 className={styles.title}>About Me</h1>
          </div>
          <h2 className={styles.subtitle}>
            Crafting smooth web & app experiences
          </h2>
          <p className={styles.description}>
            I’m a final-year Software Engineering student passionate about building smooth, 
            intuitive web and mobile experiences. With strong programming and problem-solving skills, 
            I enjoy turning ideas and UI/UX designs into real, user-friendly products. 
            Through team-based projects, I’ve learned how to collaborate effectively 
            and deliver high-quality solutions — and I’m eager to continue growing in a professional internship environment.
          </p>
        </div>
        {/* <div className={styles.skill}>
        </div> */}
      </div>
    </section>
  );
}
