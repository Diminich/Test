import React from "react";
import styles from './App.module.scss';
import Header from "./components/header/Header";
import ListPage from "./components/listPage/ListPage";

const App = () => {

  return (
    <div className={styles.wrapperApp}>
      <Header/>
      <ListPage />
    </div>
  );
}

export default App;
