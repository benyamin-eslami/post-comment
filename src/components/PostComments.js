import { useCallback, useState, useEffect, memo } from "react";
import styles from "./PostComments.module.css";

const PostsComments = ({ id }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getPosts = useCallback(async () => {
    setLoading(true);
    const api = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    console.log(api);

    const axios = require("axios").default;
    const resp = await axios.get(api);
    const dataArray = await resp.data;
    console.log(dataArray);
    setData(dataArray);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    id && getPosts();
  }, [getPosts, id]);
  return (
    <>
      {data.length !== 0 && !isLoading && (
        <div className={styles.postComents}>
          <p>post number{id} comments :</p>
          {data.map((obj, i) => {
            return (
              <div key={Math.random()} className={styles.postComentsItem}>
                {i + 1}
                <p>
                  <b>name :</b> {obj.name}:
                </p>
                <p>
                  {" "}
                  <b>comment :</b>
                  {obj.body}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {isLoading && <h1>is Loading</h1>}
    </>
  );
};
export default memo(PostsComments);
