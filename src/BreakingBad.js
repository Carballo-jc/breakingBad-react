import React from "react";
import Header from "./components/Header";
import CardList from "./components/cardList/CardList";
import styles from "./breaking.module.css";

function BreakingBad() {
  return (
    <div className={styles.container}>
      <Header />
      <CardList />
    </div>
  );
}

export default BreakingBad;
