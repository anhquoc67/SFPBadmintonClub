import React from 'react';
import '../Style/HOT.css'; // Importing CSS file for styling

const HOT = () => {
  const products = [
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729413057/bn4_qwimll.jpg",
      name: "Mr.Hai Model",
      price: "$100", // Giá sản phẩm
      description: "Trước khi tham gia giải đấu anh ấy rất nam tính, sau khi vào giải đấu anh ấy như một thiếu nữ.😁",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729413057/bn5_iz1j82.jpg",
      name: "Mr. Hai Model",
      price: "$120", // Giá sản phẩm
      description: "Cô ấy đang nhìn ngắm chiếc váy xinh xắn.😜",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729413057/bn6_rbmmzb.jpg",
      name: "Mr. Hai Model",
      price: "$80", // Giá sản phẩm
      description: "Càng ngày càng thấy cô ấy lầy lội.👍",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729413593/bn8_v0kwk7.jpg",
      name: "Mrs. Trang",
      price: "$90", // Giá sản phẩm
      description: "Đây là BTC giải đấu cho mọi người trong Group. Người phụ nữ sáng giá của Group!❤️",
    }
  ];

  return (
    <div className="HOT">
      <h2>HOT</h2>
      <hr />
      <div className="image-gallery">
        {products.map((product, index) => (
          <div key={index} className="image-item">
            <img src={product.src} alt={`HOT ${index + 1}`} className="img-fluid" />
            <div className="overlay">HOT</div> {/* Thay đổi chữ thành "HOT" */}
            <p className="product-name">{product.name}</p> {/* Hiển thị tên nhân vật */}
            <p className="product-description">{product.description}</p> {/* Hiển thị giá sản phẩm */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HOT;
