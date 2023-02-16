import Image from "next/image";
import React from "react";
import styles from "@/styles/AccountType.module.css";
import { useRouter } from "next/router";

const AccountType = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content1}>
          <Image
            src="close.svg"
            alt="close"
            width={50}
            height={50}
            onClick={() => router.push("/")}
          />
          <button className={styles.buttonBody}>{`🌐EN ˅`} </button>
        </div>
        <div className={styles.content2}>
          <h1 className={styles.h1}>
            What kind of account would you like to open today?
          </h1>
          <p className={styles.text}>
            You can add the other account type later too
          </p>
        </div>
        <div className={styles.content3}>
          <Image src="person.svg" alt="close" width={50} height={50} />
          <div>
            <h1 className={styles.title}>Individual account</h1>
            <p className={styles.titleText}>
              Spend,recieve, Send money for less,save in Fx anywhere around the
              world
            </p>
          </div>
          <Image src="sideArrow.svg" alt="close" width={50} height={50} />
        </div>
        <div className={styles.content3}>
          <Image src="accountBox.svg" alt="close" width={50} height={50} />
          <div>
            <h1 className={styles.title}>Individual account</h1>
            <p className={styles.titleText}>
              Spend,recieve, Send money for less,save in Fx anywhere around the
              world
            </p>
          </div>
          <Image src="sideArrow.svg" alt="close" width={50} height={50} />
        </div>
      </div>
    </>
  );
};
export default AccountType;
