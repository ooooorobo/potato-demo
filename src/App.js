// import "./styles/App.css";
import "./styles/Main.css";
import Item from "./components/Item.js";

const data = {
  id: 1,
  name: "에어팟 3세대",
  category: "디지털기기",
  description: "에어팟 3세대 미개봉 상품입니다",
  price: 205000,
  likeCount: 1,
  chatCount: 0,
  hitCount: 6,
  imgSrc:
    "https://image.zdnet.co.kr/2021/03/15/9a199a4f4d3770adff57ec09cfec4eb1.png",
  state: "판매중",
  username: "김메밀",
  address: "팔달구 우만동",
  profileImg: "",
};

const dataList = [];
for (let i = 0; i < 10; i++) dataList.push(data);

function App() {
  return (
    <div className="App">
      <header>
        <h1>🥔 감자마켓</h1>
      </header>
      <main>
        <h2 className="title">최근 감자 보기</h2>
        <div className="dataListContainer">
          {dataList.map((d) => (
            <Item data={d} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
