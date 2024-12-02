import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./NewCategory.css";

import pro1 from "../../assets/product_1.png";
import pro2 from "../../assets/product_25.png";
import pro3 from "../../assets/product_18.png";

const NewCategory = () => {
  return (
    <div className=" new-category">
      <div className="new-category-item">
        <dir className="new-category-img">
          <img src={pro1} alt="" />
        </dir>
        <div className="new-category-text">
          <h3>Womens</h3>
          <Link to="/womens" className="new-category-link">
            Collection <IoIosArrowRoundForward className="new-category-icon" />
          </Link>
        </div>
      </div>
      <div className="new-category-item">
        <dir className="new-category-img">
          <img src={pro2} alt="" />
        </dir>
        <div className="new-category-text">
          <h3>Kids</h3>
          <Link to="/kids" className="new-category-link">
            Collection <IoIosArrowRoundForward className="new-category-icon" />
          </Link>
        </div>
      </div>
      <div className="new-category-item">
        <dir className="new-category-img">
          <img src={pro3} alt="" />
        </dir>
        <div className="new-category-text">
          <h3>Mens</h3>
          <Link to="/mens" className="new-category-link">
            Collection <IoIosArrowRoundForward className="new-category-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
