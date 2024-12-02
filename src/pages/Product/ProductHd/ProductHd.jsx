/* eslint-disable react/prop-types */
import { TbArrowRight } from "react-icons/tb";

import "./ProductHd.css";

const ProductHd = (props) => {
  const { product } = props;
  return (
    <div className=" product-hd flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
      Home <TbArrowRight className="text-lo" /> {product.category}{" "}
      <TbArrowRight className="text-lo" /> {product.name}
    </div>
  );
};

export default ProductHd;
