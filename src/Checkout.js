import React, { useState } from 'react';


const Checkout = ({viewItems,viewTotal,setTotal}) => {

  
  
    return (
        <div className="CheckoutList">
            <h1>
Order Details
</h1>
<div className="CheckoutDetails">
        {viewItems.map((viewItem, index) => (
          <div key={index}>
            {viewItem.name}: x{viewItem.quantity}   ${viewItem.total}
          </div>
        ))}
      </div>
      Total: ${viewTotal}
    </div>
  );
};

export default Checkout;