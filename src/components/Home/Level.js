import React from 'react';
import '../../Style/Level.css'; // Optional: For custom styling

const Level = () => {
    return (
        <div className="level-container">
            <h2 style={{ textAlign: 'center'}}>Bảng xếp hạng Trình độ</h2>
            <section className="level-section">
                <h2>Average</h2>
                <p>Chúng tôi là những người đánh lâu năm</p>
            </section>

            <section className="level-section">
                <h2>Below Average</h2>
                <p>Chúng tôi chơi cũng được vài năm</p>
            </section>

            <section className="level-section">
                <h2>Weak Plus</h2>
                <p>Chúng tôi đã chơi hơn một năm</p>
            </section>

            <section className="level-section">
                <h2>Weak</h2>
                <p>Chúng tôi mới bắt đầu chơi dưới một năm</p>
            </section>
        </div>
    );
};

export default Level;
