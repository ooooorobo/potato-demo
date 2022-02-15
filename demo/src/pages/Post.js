import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../components/Item";

export default function Post() {
  const [searchParams] = useSearchParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      fetch(`http://localhost:3001/post/${id}`)
        .then((data) => data.json())
        .then((json) => {
          setItem(json);
        });
    }
  }, [searchParams]);

  return <div>{item && <Item data={item} />}</div>;
}
