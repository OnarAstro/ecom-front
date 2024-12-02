/* eslint-disable react/prop-types */
import { useContext } from "react";
import Item from "../../components/Item/Item";
import { ShopContext } from "../../Context/ShopContext";

import "./Category.css";

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);

  return (
      <div className="category">
        <div className="category-banner">
          <img src={banner} alt="" className="" />
        </div>
        <div className="category-show">
          <h5>
            <span className="font-bold">Showing 1-12</span> out of 36 products
          </h5>
        </div>
        {/* container */}
        <div className="container-item">
          {all_products.map((item) => {
            if (category === item.category) {
              return <Item key={item.id} {...item} />;
            }
          })}
        </div>
        <div className="load-more">
          <button className="btn_dark_rounded">Load more</button>
        </div>
      </div>
  );
};

export default Category;
