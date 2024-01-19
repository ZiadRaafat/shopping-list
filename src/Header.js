import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
    return (
        <div>
<h1 className="Title">Welcome to Your Shopping List</h1>
<div  className="HContainer">
<Link to="/">
<button className="hbutton">Main Page</button>
</Link>
<Link to="/add">
<button className="hbutton">Add Item</button>
</Link>
<button className="hbutton">Modify Item</button>
<button className="hbutton">Change Regional Pricing</button>
<button className="hbutton">Checkout</button>


      
</div>
      </div>

    )}
export default Header;