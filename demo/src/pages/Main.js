import { useState, useEffect, useRef, useCallback } from "react";
import Item from "../components/Item";
import "../styles/Main.css";

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = useCallback(() => {
    setLoading(true);
    fetch(`http://localhost:3001/post?_page=${page}&_limit=12`)
      .then((data) => data.json())
      .then((json) => {
        setPosts([...posts, ...json]);
        setLoading(false);
      });
  }, [page, posts]);

  const onClickMore = useCallback(() => {
    setPage(page + 1);
    loadMorePosts();
  }, [page, loadMorePosts]);

  useEffect(() => {
    loadMorePosts();
    setPage(2);
  }, []);

  return (
    <div>
      <h2 className="title">최근 감자 보기</h2>
      <div className="dataListContainer">
        {posts.map((d) => (
          <Item key={d.id} data={d} />
        ))}
      </div>
      <div className="pagination">
        <button disabled={loading} onClick={onClickMore}>
          다음
        </button>
      </div>
    </div>
  );
}
