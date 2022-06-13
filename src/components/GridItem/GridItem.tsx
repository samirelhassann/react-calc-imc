import * as React from "react";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";
import { Level } from "../../helpers/imc";

interface IGridItemProps {
  item: Level;
}

const GridItem = ({ item }: IGridItemProps) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      {item.yourBMI && (
        <div className={styles.yourBMI}>
          Your IMC is {item.yourBMI.toFixed(2)}{" "}
        </div>
      )}

      <div className={styles.gridIcon}>
        <img src={item.icon === "up" ? upImage : downImage} alt="" width="30" />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      <div className={styles.gridInfo}>
        <>
          <p>
            BMI is between <strong>{item.imc[0].toString()}</strong> and{" "}
            <strong>{item.imc[1].toString()}</strong>
          </p>
        </>
      </div>
    </div>
  );
};

export default GridItem;
