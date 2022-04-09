import React from "react";
import "./Orders.css";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  // navigate create

  const navigate = useNavigate();

  // remove item
  const handleRemoveItem = (product) => {
    // console.log(product);
    const rest = cart.map((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart key={products.id} cart={cart}>
          <h3>Inside of Orders</h3>
          {/* <Link to="/inventory">
            <button>Proceed CheckOut</button>
          </Link> */}
          <button onClick={() => navigate("/inventory")}>
            Proceed CheckOut
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
