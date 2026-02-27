"use client";

import React from "react";
import { Timeline } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./myprojects.module.css";

import { projects } from "@/data/projects";

export default function MyProjects() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          width: "350px",
          height: "70px",
          margin: "0 auto 20px auto",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1 className={styles.heading}>My Projects</h1>
      </div>

      <Timeline
        mode="alternate"
        className={styles.timeline}
        items={projects.map((project) => ({
          key: project.id,
          content: (
            <div className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.time}</p>
              <p>Team size: {project.team}</p>
              <p>Position: {project.role}</p>

              <Link href={`/project-details/${project.id}`}>
                Show more
                <DoubleRightOutlined style={{ marginLeft: 6 }} />
              </Link>
            </div>
          ),
        }))}
      />
    </div>
  );
}