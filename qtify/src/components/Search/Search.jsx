import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Search = (props) => {
  const { placeholder } = props;
  return (
    <>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}></input>
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default Search;