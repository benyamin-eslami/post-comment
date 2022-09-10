import React, { memo, useState } from "react";
import styles from "./Posts.module.css";
const Posts = ({ data, onGetId, onGetuserId }) => {
  console.log("posts run");
  const postClickHandler = (e, id) => {
    onGetId(id);
  };
  return (
    <div className={styles.postsWrapper}>
      {data.map((obj) => {
        return (
          <div
            onClick={(e) => postClickHandler(e, obj.id)}
            key={Math.random()}
            className={styles.box}
          >
            <p>post number{obj.id}</p>
            <p>{obj.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default memo(Posts);
