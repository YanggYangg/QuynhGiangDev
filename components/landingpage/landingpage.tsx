"use client";

import React from "react";
import Home from "@/app/home/page";
import MyContact from "@/app/my-contact/page";
import AboutMe from "@/app/about-me/page";
import MyProjects from "@/app/my-projects/page";

import styles from "./landingpage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
    <>
        <Home />
        <MyContact />
        <AboutMe />
        <MyProjects />
    </>
    </div>
  );
}
