/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../../../Context/ShopContext";

import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <section>
      <div className="product-display">
        {/* left side */}
        <div className="product-display-left">
          <div className=" box-image-left ">
            <img
              src={product.image}
              alt={"productImg"}
            />
            <img
              src={product.image}
              alt={"productImg"}
            />
            <img
              src={product.image}
              alt={"productImg"}
            />
            <img
              src={product.image}
              alt={"productImg"}
            />
          </div>
          <div className="box-image-right">
            <img src={product.image} alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="product-display-right flex flex-col xl:flex-[1.7]">
          <h3 className="h3">{product.name}</h3>
          <div className="box-star flex gap-x-2 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>(111)</p>
          </div>
          <div className="box-price flex gap-x-6 medium-20 my-4">
            <div className="old-price">${product.old_price}</div>
            <div className="new-price">${product.new_price}</div>
          </div>
          <div className="container-desc mb-4">
            <h4 className="bold-16">Select Size:</h4>
            <div className="box-size flex gap-3 my-3">
              <div className="size ring-slate-900">
                S
              </div>
              <div className="size">
                M
              </div>
              <div className="size">
                L
              </div>
              <div className="size">
                XL
              </div>
            </div>
            <div className="box-btn flex flex-col gap-y-3 mb-4 max-w-[555px]">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="add"
              >
                Add to cart
              </button>
              <button className="buy">
                Buy it now
              </button>
            </div>
            <p className="capitalize ">
              <span className="medium-16 text-tertiary">Category :</span>{" "}
              {product.category} | Jacket | Winter
            </p>
            <p className="capitalize">
              <span className="medium-16 text-tertiary">Tags :</span> Modern |
              Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
