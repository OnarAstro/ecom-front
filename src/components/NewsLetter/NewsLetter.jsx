import "./newsLetter.css";

import pro1 from "./../../assets/product_5.png";
import pro2 from "./../../assets/product_2.png";
import pro3 from "./../../assets/product_3.png";
import pro4 from "./../../assets/product_4.png";

const NewsLetter = () => {
  return (
    <div className="news-letter container">
      <div className="news-letter-text">
        <p className="news-letter-p">NEWSFEED</p>
        <h3>Instagram</h3>
        <p className="news-letter-p2">
          Follow us on social media for more discount & promotions
        </p>
        <h4>@astro_as3nn</h4>
      </div>
      <div className="news-letter-img">
        <img src={pro1} alt="" />
        <img src={pro2} alt="" />
        <img src={pro3} alt="" />
        <img src={pro4} alt="" />
      </div>
    </div>
  );
};

export default NewsLetter;
