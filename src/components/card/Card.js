import React from "react";
import styles from "./card.module.css";

const card = ({ person }) => {
  console.log(person[1]);
  const { img, name, birthday, portrayed, nickname } = person;
  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.img} />
      <h4>{nickname}</h4>
      <p>{birthday}</p>
      <h5>{portrayed}</h5>
    </div>
  );
};

export default card;
