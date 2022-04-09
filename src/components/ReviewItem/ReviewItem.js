import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemoveItem } = props;
  const { name, img, price, quantity } = product;

  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-items-details-container">
        <div className="review-items-details">
          <p className="product-name" title={name}>
            Name:
            {name?.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price:
            <span className="orange"> $ {price}</span>
          </p>
          <p> Quantity : {quantity}</p>
        </div>
        <div className="review-items-delete">
          <button
            onClick={() => handleRemoveItem(product)}
            className="delete-btn"
          >
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
