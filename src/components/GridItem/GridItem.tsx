import * as React from "react";
import styles from "./GridItem.module.css";
import upImage from '../../assetes/up.png'
import downImage from '../../assetes/down.png'

interface IGridItemProps {
  key: number;
  title: string;
}

const GridItem = ({ key, title }: IGridItemProps) => {
  return <div key={key}> {title}</div>;
};

export default GridItem;
