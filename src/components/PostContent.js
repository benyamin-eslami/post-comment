import { memo, useCallback, useEffect, useState } from "react";
import styles from "./PostContent.module.css";

const PostsContent = ({ id }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const getPosts = useCallback(async () => {
    setLoading(true);
    const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const axios = require("axios").default;
    const resp = await axios.get(api);
    const dataobj = await resp.data;
    setData(dataobj);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    id && getPosts();
  }, [getPosts, id]);
  return (
    <>
      {data && !isLoading && (
        <div key={Math.random()} className={styles.postContent}>
          <p>post number{data.id}</p>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      )}
      {isLoading && <h1>is Loading</h1>}
    </>
  );
};
export default memo(PostsContent);
