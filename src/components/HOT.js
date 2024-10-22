import React from 'react';
import '../Style/HOT.css'; // Importing CSS file for styling

const HOT = () => {
  const products = [
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729592832/nhom2_kfrbno.jpg",
      name: "30/04/2023",
      price: "$100", // Giá sản phẩm
      description: "Chụp hình lưu niệm trước giải đấu.😁",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729592833/dulich_n1ex5c.jpg",
      name: "30/04/2023",
      price: "$120", // Giá sản phẩm
      description: "Tiệt ngoài trời gắng kết tình đồng đội.😜",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729592844/nhom1_mbrvel.jpg",
      name: "30/04/2023",
      price: "$80", // Giá sản phẩm
      description: "Tuy chụp chung chứ lòng căng lắm .👍",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729413593/bn8_v0kwk7.jpg",
      name: "Mrs. Trang",
      price: "$90", // Giá sản phẩm
      description: "Đây là BTC giải đấu 20/10/2024 cho mọi người trong Group. Người phụ nữ sáng giá của Group!❤️",
    }
  ];

  return (
    <div className="HOT">
      <h2>Điểm lại mùa giải trước</h2>
      <hr />
      <div className="image-gallery">
        {products.map((product, index) => (
          <div key={index} className="image-item">
            <img src={product.src} alt={`HOT ${index + 1}`} className="img-fluid" />
            <div className="overlay"></div> {/* Thay đổi chữ thành "HOT" */}
            <p className="product-name">{product.name}</p> {/* Hiển thị tên nhân vật */}
            <p className="product-description">{product.description}</p> {/* Hiển thị giá sản phẩm */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HOT;
