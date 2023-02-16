import React from "react";
import styles from "@/styles/Nft.module.css";

type Props = {
  name: string;
  number?: number;
};
export const ListComponent = (props: Props) => {
  const { name, number } = props;
  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.liText}>
            <span
              className="material-icons"
              style={{
                color: "black",
                border: "1px solid white",
                borderRadius: "9px",
                fontSize: "0px",
                margin: "3px 7px",
                height: "12px",
                width: "12px",
              }}
            >
              fiber_manual_record
            </span>
            {name}
          </span>
          <span>{number}</span>
        </li>
      </ul>
    </>
  );
};
