"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Carousel } from "antd";
import { LeftOutlined  } from "@ant-design/icons";
import { projectdetails } from "../../../data/projectdetail";
import styles from "./projectdetails.module.css";

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();

  // id có thể là string | string[]
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const project = projectdetails.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.container}>
       <button
        onClick={() => router.back()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          border: "1px solid #1f6f6a",
          padding: "8px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1f6f6a";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <LeftOutlined style={{ fontSize: "18px", color: "#e6fffa" }} />
        <span
          style={{
            color: "#e6fffa",
            fontSize: "18px",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          Back
        </span>
      </button>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <div style={{ padding: "20px" }}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <div className={styles.projectInfo}>
              <h3>Duration: {project.duration}</h3>
              <h3>Team size: {project.teamSize}</h3>
              <h3>Position: {project.position}</h3>
            </div>
          </div>
          <Carousel autoplay>
            {project.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={project.name} className={styles.slideImg} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.description}>
            <ul className={styles.plusList}>
              {project.descriptions.map((desc, index) => (
                <li key={index} className={styles.plusItem}>
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.techUse}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "300px",
                height: "30px",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3>Technologies Used</h3>
            </div>

            <ul className={styles.plusList}>
              {project.techStack.frontend && (
                <li className={styles.plusItem}>
                  Frontend: {project.techStack.frontend.join(", ")}
                </li>
              )}
              {project.techStack.backend && (
                <li className={styles.plusItem}>
                  Backend: {project.techStack.backend.join(", ")}
                </li>
              )}
              {project.techStack.database && (
                <li className={styles.plusItem}>
                  Database: {project.techStack.database.join(", ")}
                </li>
              )}
              {project.techStack.deployment && (
                <li className={styles.plusItem}>
                  Deployment: {project.techStack.deployment.join(", ")}
                </li>
              )}
              {project.techStack.architecture && (
                <li className={styles.plusItem}>
                  Architecture: {project.techStack.architecture.join(", ")}
                </li>
              )}
              {project.techStack.other &&
                project.techStack.other.length > 0 && (
                  <li className={styles.plusItem}>
                    Other: {project.techStack.other.join(", ")}
                  </li>
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
