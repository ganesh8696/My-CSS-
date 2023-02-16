import React from "react";
import styles from "@/styles/signUp.module.css";
import { url } from "inspector";

type props = {
  title: string;
  description: string;
  onPress(): void;
  bgImg: string;
  bgcolor: any;
};

const SigUpUI = (props: props) => {
  const { title, description, onPress, bgImg, bgcolor } = props;
  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundColor: bgcolor,
        }}
      >
        <div className={styles.content1}>
          <h1 className={styles.h1}>{title}</h1>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.content2}>
          <p className={styles.text}>Sign up →</p>
          <h3 onClick={onPress} className={styles.text}>
            Continue
          </h3>
        </div>
      </div>
    </>
  );
};
export default SigUpUI;
