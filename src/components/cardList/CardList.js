import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import styles from "./cardList.module.css";

const CardList = () => {
  const [dataInfo, setDataInfo] = useState([]);
  useEffect(() => {
    getNouns();
  }, []);
  const getNouns = async () => {
    const url = `https://www.breakingbadapi.com/api/characters`;
    const resp = await fetch(url);
    const data = await resp.json();
    setDataInfo(data);
  };

  return (
    <div className={styles.content_cards}>
      <div className={styles.card_list}>
        {dataInfo.map((person, char_id) => {
          return <Card key={char_id} person={person} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
