

const Checkout = ({viewItems}) => {
    return (
        <div className="CheckoutList">
            <h1>
Order Details
</h1>
<div className="CheckoutDetails">
        {viewItems.map((viewItem, index) => (
          <div key={index}>
            {viewItem.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;