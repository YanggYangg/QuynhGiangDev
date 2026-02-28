"use client";

import React from "react";
import {
  PhoneOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styles from "./mycontact.module.css";

export default function MyContact() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.header}>
            <h1>Get In Touch</h1>
            <p>
              Feel free to reach out if you want to collaborate or just say
              hello
            </p>
          </div>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <MailOutlined />
              </div>
              <div>
                <span className={styles.label}>Email</span>
                <p className={styles.value}>nguyenquynhgiang1324@gmail.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <PhoneOutlined />
              </div>
              <div>
                <span className={styles.label}>Phone</span>
                <p className={styles.value}>+84 934 119 430</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <LinkedinOutlined />
              </div>
              <div>
                <span className={styles.label}>LinkedIn</span>
                <p className={styles.value}>
                  linkedin.com/in/nguyễn-thị-quỳnh-giang-45b91027a/
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <form className={styles.form}>
            <h2 className={styles.formTitle}>Send Me a Message</h2>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>

            <div className={styles.inputGroup}>
              <label>Subject</label>
              <input
                type="text"
                placeholder="Project collaboration..."
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
