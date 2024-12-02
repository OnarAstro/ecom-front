import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

import "./CartItems.css";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <section className=" cart">
      <table className="cart-table">
        <thead>
          <tr className="">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  key={e.id}                >
                  <td className="box-img ">
                    <img
                      src={e.image}
                      alt="productImg"
                      height={43}
                      width={43}
                    />
                  </td>
                  <td>
                    <div className="name">{e.name}</div>
                  </td>
                  <td>${e.new_price}</td>
                  <td className="items">{cartItems[e.id]}</td>
                  <td>${e.new_price * cartItems[e.id]}</td>
                  <td>
                    <div className="delete">
                      <TbTrash onClick={() => removeFromCart(e.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      {/* cart details */}
      <div className="cart-details">
        <dir className="cart-details-container">
          <h4 className="bold-20">Summary</h4>
          <div>
            <div className="cart-total">
              <h4 className=" total-title">Subtotal:</h4>
              <h4 className="total-amount">
                ${getTotalCartAmount()}
              </h4>
            </div>
            <hr />
            <div className="cart-total">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="total-amount">Free</h4>
            </div>
            <hr />
            <div className="cart-total">
              <h4 className="total">Total:</h4>
              <h4 className="total">${getTotalCartAmount()}</h4>
            </div>
          </div>
          <button className="btn-checkout btn_dark_rounded w-44">Checkout</button>
          <div className=" container-coupon flex flex-col gap-10">
            <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
            <div className="box-coupon rounded-full ring-1 ring-slate-900/10">
              <input
                type="text"
                placeholder="Coupon code"
                className="bg-transparent border-none outline-none"
              />
              <button className="btn_dark_rounded">Submit</button>
            </div>
          </div>
        </dir>
      </div>
    </section>
  );
};
export default CartItems;
