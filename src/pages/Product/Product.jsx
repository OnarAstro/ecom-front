import { useContext } from "react";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import ProductHd from "./ProductHd/ProductHd";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import "./Product.css";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className="products max_padd_container py-28 ">
      <div className="product-container">
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
