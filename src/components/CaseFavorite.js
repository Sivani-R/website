import React from 'react';
import './CaseFavorite.css';

const CaseFavorite = () => {
  const items = [
    { id: 1, text: "Lorem ipsum dolor sit amet consectetur. Et tincidunt" },
    { id: 2, text: "Photo", icon: "🖼️" },
    { id: 3, text: "Lorem ipsum dolor sit amet consectetur. Et tincidunt" },
  ];

  return (
    <div className="case-favorite">
      <h2 className="case-title">
        <span className="case-icon">📌</span> Case Favorite
      </h2>
      <div className="case-items">
        {items.map((item) => (
          <div key={item.id} className="case-item">
            {item.icon && <span className="item-icon">{item.icon}</span>}
            <span className="item-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseFavorite;
