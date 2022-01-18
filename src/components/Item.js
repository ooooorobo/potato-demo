export default function Item({ data }) {
  return (
    <div className="item">
      <img src={data.imgSrc} alt={data.name} />
      <p clasName="name">{data.name}</p>
      <p className="price">{data.price}원</p>
      <p className="address">{data.address}</p>
      <span className="count">
        관심 <span>{data.likeCount}</span>
      </span>
      <span className="count">
        채팅 <span>{data.chatCount}</span>
      </span>
    </div>
  );
}
