import { useState, useEffect } from "react";
import Item from "../components/Item";

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/post?_page=0&_limit=12")
      .then((data) => data.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      <h2 className="title">최근 감자 보기</h2>
      <div className="dataListContainer">
        {posts.map((d) => (
          <Item data={d} />
        ))}
      </div>
    </div>
  );
}
