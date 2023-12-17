import React from "react";
import { featured } from "../../data/Data";

const FeaturedCard = () => {
  const handleClick = (route) => {
    // Handle navigation logic here or do something else
    console.log(`Navigating to ${route}`);
  };

  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div
            className='box'
            key={index}
            onClick={() => handleClick(`/details/${items.id}`)}
          >
            {/* Assuming you have an 'id' property in the 'items' object */}
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
