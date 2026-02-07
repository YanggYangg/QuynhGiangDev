"use client";

import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <h3 className={styles.logo}>{"<YangYang Dev />"}</h3>
      </div>
      <div className={styles.rightContainer}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/my-projects" className={styles.link}>My projects</Link>
          <Link href="/about-me" className={styles.link}>About me</Link>
          <Link href="/my-contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
