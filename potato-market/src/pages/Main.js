import { useEffect, useState } from "react";
import Item from "../components/Item";

export function Main() {
  const [dataList, setDataList] = useState([]);

  // 컴포넌트가 처음 생성이 됐을 때 데이터를 한 번 받아오기
  // useEffect -> React 생명주기를 구현하는 훅
  // 인수를 두개 받는데
  // 첫번째 인수 -> 수행할 동작(함수)
  // 두번째 인수 -> 배열을 받는데, 이 배열 안에 들어가 있는 값이 변경될 때마다 첫번째 인수로 받은
  // 함수를 실행을 시켜요
  // 만약에 빈 배열이다 -> 그러면 컴포넌트가 마운트 될 때 함수를 실행시킴
  useEffect(() => {
    fetch("http://localhost:3001/post?_page=1&_limit=12")
      .then((data) => data.json())
      .then((json) => setDataList(json));
  }, []);

  return (
    <div className="container">
      {dataList.map((d) => (
        // key => react 비교 알고리즘이랑 관련이 있어요
        <Item key={d.id} data={d} />
      ))}
    </div>
  );
}

// 이 함수 하나가 리액트 컴포넌트 하나인데
// 이 컴포넌트가 가지고 있고, 컴포넌트 내에서 변경이 가능한
// 값이 상태(state)
// 이 상태가 바뀌면 **이 컴포넌트**의 렌더링이 다시 수행됩니다
// --> 리렌더링 이라고 합니다

// function -> component
// 함수형 컴포넌트 라고 해요
// React Hooks API <== 얘를 가지고 상태를 관리해요
