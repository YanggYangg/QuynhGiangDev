"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import {
  ArrowRightOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

export default function Home() {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);

  const handlePhoneClick = () => {
    setIsQrOpen(true);
  };
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/nguyễn-thị-quỳnh-giang-45b91027a/",
      "_blank",
    );
  };
  const handleMailClick = () => {
    setIsMailOpen(true);
  };
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <h2 className={styles.title}>Hello,</h2>
        <h2 className={styles.title}>I'm Nguyen Thi Quynh Giang</h2>
        <h3 className={styles.subtitle}>Web & Mobile Application Developer</h3>
        <p className={styles.description}>
          I am a web and mobile developer who enjoys turning ideas into real
          products through clean code and thoughtful user interfaces.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button} disabled>
            Get in touch
            <ArrowRightOutlined
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </button>

          <div className={styles.buttonGroup}>
            <button onClick={handlePhoneClick}>
              <PhoneOutlined style={{ fontSize: "35px", color: "#1877F2" }} />
            </button>
            <button onClick={handleLinkedinClick}>
              <LinkedinOutlined
                style={{ fontSize: "35px", color: "#0A66C2" }}
              />
            </button>
            <button onClick={handleMailClick}>
              <MailOutlined style={{ fontSize: "35px", color: "#D44638" }} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src="/img/img_home.png"
          alt="Home Avatar"
          width={300}
          height={450}
          priority
          className={styles.avatar}
        />
      </div>
      <Modal
        open={isQrOpen}
        footer={null}
        onCancel={() => setIsQrOpen(false)}
        centered
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>Zalo QR Code</h3>
          <img
            src="/img/QR_contact.jpg"
            alt="Zalo QR"
            style={{ width: "250px", borderRadius: "12px" }}
          />
          <p style={{ marginTop: "10px" }}>Scan to contact me on Zalo</p>
        </div>
      </Modal>
      <Modal
        open={isMailOpen}
        footer={null}
        onCancel={() => setIsMailOpen(false)}
        centered
      >
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontWeight: "bold" }}>Email Me</h3>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1f6f6a",
              cursor: "pointer",
            }}
            onClick={() =>
              navigator.clipboard.writeText("nguyenquynhgiang1324@gmail.com")
            }
          >
            nguyenquynhgiang1324@gmail.com
          </p>
          <p style={{ fontSize: "14px" }}>Click to copy email address</p>
        </div>
      </Modal>
    </section>
  );
}
