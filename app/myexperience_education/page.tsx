"use client";

import React from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import styles from "./myexperience_education.module.css";

export default function MyExperienceEducation() {
    const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/file/NguyenThiQuynhGiang_CV.pdf";
  link.download = "NguyenThiQuynhGiang_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        My Experience & Education
      </h1>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Work Experience</h2>
          <div className={styles.cardContent}>
            <p>Jun 2025 - Sep 2025</p>
            <p>Intern Front-End Developer</p>
            <p>Digitech Solutions Company in Ho Chi Minh City</p>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Education</h2>
          <div className={styles.cardContent}>
            <p>Aug 2021 - Dec 2025 (Expected to graduate at the end of 2026)</p>
            <p>Bachelor of Software Engineering</p>
            <p>Industrial University Of Ho Chi Minh City</p>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Certification</h2>
          <div className={styles.cardContent}>
            <p>Jul 2020: Basic Information Technology Application Certificate</p>
            <p>Dec 2024: TOEIC English Certificate</p>
          </div>
        </div>
      </div>

      <div className={styles.downloadContainer}>
        <button className={styles.downloadButton} onClick={handleDownloadCV}>Download my CV <ArrowDownOutlined /></button>
      </div>
    </div>
  );
}