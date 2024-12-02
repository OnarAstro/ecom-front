import { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecom-node-production.up.railway.app/popularproducts")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <section className="mt-5 popular">
      <div className="popular-container">
        <h3 className=" d-flex align-items-center justify-content-center text-align-center">Trending Brands</h3>
        <hr className=""  />
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

export default Popular;
