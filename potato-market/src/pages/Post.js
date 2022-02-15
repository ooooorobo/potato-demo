import { useSearchParams } from "react-router-dom";

export function Post() {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("id"));

  return <div>상세 페이지 입니다.</div>;
}
