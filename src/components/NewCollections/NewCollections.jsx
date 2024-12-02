import { useEffect, useState } from "react";
import Item from "../Item/Item";

import "./NewCollections.css";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("https://ecom-node-production.up.railway.app/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <section className=" new-collections">
      <div className=" container-new-collections">
        <h3 className="h3 text-center">Latest Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        {/* container */}
        <div className="container-item col">
          {new_collection.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
