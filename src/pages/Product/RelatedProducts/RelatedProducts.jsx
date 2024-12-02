import { useEffect, useState } from "react";
import Item from "../../../components/Item/Item";

import "./RelatedProducts.css";

const RelatedProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    fetch("https://ecom-node-production.up.railway.app/popularproducts")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <section className="product-related">
      <div className=" product-related-container">
        <h3 className="h3 text-center">Related Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        {/* container */}
        <div className="container-item">
          {popularProducts.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
