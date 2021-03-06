import { Link } from "react-router-dom";
import "../styles/Item.css";

function Item({ data }) {
  return (
    <Link to={`/post?id=${data.id}`}>
      <div className="item">
        <img src={data.imgSrc} alt={data.name} />
        <p className="name">{data.name}</p>
        <p className="price">{data.price}원</p>
        <p className="address">{data.address}</p>
        <div>
          <div className="count">
            관심 <span>{data.likeCount}</span>
          </div>
          <div className="count">
            채팅 <span>{data.chatCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
