import "./App.css";
import { useState, useCallback, useEffect } from "react";
import PostsComments from "./components/PostComments";
import PostsContent from "./components/PostContent";
import Posts from "./components/Posts";

function App() {
  const [postsData, setPostsData] = useState([]);
  const [id, setId] = useState("");

  const getPosts = useCallback(async () => {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const axios = require("axios").default;
    const resp = await axios.get(api);
    const dataArray = await resp.data;
    setPostsData(dataArray);
    // dataArray.forEach((dataObj) => {});
  }, []);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const getId = (id) => {
    setId(id);
  };

  return (
    <div className="container">
      <div className="left">
        <div className="posts">
          <Posts onGetId={getId} data={postsData} />
        </div>
      </div>
      <div className="right">
        <PostsContent id={id} />
        <PostsComments id={id} />
      </div>
    </div>
  );
}

export default App;
