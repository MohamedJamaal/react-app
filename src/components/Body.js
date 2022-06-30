import React from 'react';
import priceList from './Data';
import './Body.css';

function Body() {
  const list = priceList.map((item, index) => (
    <h2 className="list" key={index}>
      <li>
        the Item : {item.name} & Price : ${item.price}
      </li>
    </h2>
  ));
  return (
    <div className="mainBody">
      <h1 className="bodyHeader">The List Of Our Items</h1>
      {/* {priceList.map((item, index) => (
        <h2 key={index}>
          <li>
            the item : {item.name} and price : ${item.price}
          </li>
        </h2>
      ))} */}
      {list}
    </div>
  );
}

export default Body;
