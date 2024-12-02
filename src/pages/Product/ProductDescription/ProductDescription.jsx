
import "./ProductDescription.css";
const ProductDescription = () => {
  return (
    <div className="product-description mt-20">
      <div className=" product-description-tabs flex gap-3 mb-4 ">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className=" box-description flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          voluptates reiciendis! Alias similique aspernatur deserunt iure
          ducimus, neque ratione provident dolores dignissimos earum
          exercitationem hic magni et illum dicta? Eligendi itaque adipisci
          exercitationem fuga voluptatibus et quidem dicta autem nam quae id
          soluta perferendis quisquam ab, quo maxime, dolore labore. Eos
          praesentium minima repellendus laboriosam?
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, blanditiis quia? Repudiandae enim dolorum, ducimus
          necessitatibus voluptatem rem ea esse expedita ipsum aperiam maiores
          ratione quae ab debitis?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
