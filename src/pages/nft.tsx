import React from "react";
import styles from "@/styles/Nft.module.css";
import { cardList, Categorylist, StatusList } from "mock/mock";
import { ListComponent } from "@/common/listComponent";
import Image from "next/image";
import CradComp from "@/common/cradComp";

const Nft = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content1}>
          <div>
            <h1 className={styles.HeadChild1}>Explore Collection</h1>
            <div className={styles.HeadChild2}>
              <span className={styles.span1} style={{ cursor: "pointer" }}>
                <a>Home</a>
              </span>
              <span className="material-icons" style={{ fontSize: "20px" }}>
                chevron_right
              </span>
              <span className={styles.span2}>Explore Collection</span>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.body}>
            <div className={styles.bodyChild1}>
              <div className={styles.sideComp}>
                <div className={styles.search}>
                  <input
                    className={styles.searchInput}
                    placeholder=" Search...."
                  />
                  <span
                    className="material-icons"
                    style={{
                      position: "absolute",
                      fontSize: "20px",
                      padding: "10px",
                      background: "linear-gradient(to right, #0029FF, #FF0062)",
                      borderRadius: "30px",
                      margin: "4px",
                    }}
                  >
                    search
                  </span>
                </div>
                <div>
                  <h3 className={styles.Category}>Category</h3>
                  {Categorylist?.map((i) => {
                    return (
                      <ListComponent
                        key={i.id}
                        name={i.name}
                        number={i.number}
                      />
                    );
                  })}
                  <h3 className={styles.Category}>Status</h3>
                  {StatusList?.map((i) => {
                    return <ListComponent key={i.id} name={i.name} />;
                  })}
                </div>
              </div>
            </div>
            <div className={styles.bodyChild2}>
              <div className={styles.topDiv}>
                <div className={styles.topDivComp}>
                  Sort By <span className="material-icons"> expand_less</span>
                </div>
              </div>
              <div className={styles.bottomDiv}>
                {cardList?.map((i) => (
                  <CradComp
                    key={i.id}
                    image={i.image}
                    title={i.title}
                    discription={i.discription}
                    Eth={i.Eth}
                    likes={i.likes}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nft;
