import React from 'react';
import './Card.css';

const Card = ({ title, value, showAdd, subval }) => {
  const shouldShowSubval = !(title === "Today's Coal Consumption" && value === "00");

  return (
    <div className="dashboard-card">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>

      <hr className="divider" />

      {showAdd && <div className="card-add">Add</div>}

      {shouldShowSubval && subval && (
        <div className="card-subvalue">{subval}</div>
      )}
    </div>
  );
};


export default Card;
