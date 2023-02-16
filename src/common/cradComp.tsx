import React from "react";
import styles from "@/styles/Nft.module.css";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  discription: string;
  Eth: string;
  likes: string;
};
const CradComp = (props: Props) => {
  const { image, title, Eth, discription, likes } = props;
  return (
    <>
      <div className={styles.cards}>
        <div>
          <Image
            src={image}
            height={200}
            width={200}
            alt="no Img"
            className={styles.imgCard}
          />
          <h1 className={styles.cardsH1}>{title}</h1>
          <div className={styles.cardBottom}>
            <span className={styles.cardBottomDiv1}>
              <span
                className="material-icons"
                style={{
                  color: "#ffac15",
                  backgroundColor: "#33363c",
                  borderRadius: "20px",
                  padding: "5px",
                  height: "36px",
                  width: "36px",
                  fontSize: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                bookmark
              </span>
              <span className={styles.ETHdiv}>
                <p className={styles.cardP}>{discription}</p>
                <h2 className={styles.cardH2}>{Eth}</h2>
              </span>
            </span>
            <span className={styles.ETHdiv2}>
              <span
                className="material-icons"
                style={{
                  fontSize: "20px",
                  color: "red",
                }}
              >
                favorite
              </span>
              <span className={styles.likes}>
                <p>{likes}</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CradComp;
