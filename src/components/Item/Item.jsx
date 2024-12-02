/* eslint-disable react/prop-types */

import "./Item.css";

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Item = ({ id, image, name, old_price, new_price }) => {
  return (
    <div className="item">
      <div className="container-image">
        <Link
          to={`/product/${id}`}
          className="search"
        >
          <FaSearch className=" search-icon" />
        </Link>
        <img
          onClick={window.scrollTo(0, 0)}
          src={image}
          alt="productImage"
          className=""
        />
      </div>
      <div className=" container-text">
        <h4 className="">{name}</h4>
        <div className="container-price">
          <div className="new-price">{new_price.toFixed(2)}</div>
          <div className=" old-price">
            {old_price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
