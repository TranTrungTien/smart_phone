import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppDataContext } from "../context";
import axios from "axios";

const MiniCart = () => {
  const { user } = useContext(AppDataContext);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const getCarts = async () => {
      if (user) {
        const carts = await (
          await axios.get("http://localhost:8080/api/carts/" + user.id)
        ).data;
        setCarts(carts?.carts);
      }
    };
    getCarts();
  }, [user]);
  return (
    <div className="minicart">
      <ul className="minicart-product-list">
        {carts.length &&
          carts.map((item: any, index) => (
            <li key={index}>
              <div className="minicart-product-image">
                <img
                  src={item?.product?.previewImageLink[0]}
                  alt="cart products"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src =
                      "http://localhost:8080/api/images/" +
                      item?.product?.previewImageLink[0];
                  }}
                />
              </div>
              <div className="minicart-product-details">
                <h6>
                  <p>{item?.product?.title}</p>
                </h6>
                <span>
                  {item?.totalPrice} x {item?.quantity}
                </span>
              </div>
            </li>
          ))}
      </ul>
      <div className="minicart-button">
        <Link
          to={"/carts"}
          className="li-button li-button-fullwidth li-button-dark"
        >
          <span>Xem giỏ hàng</span>
        </Link>
        <Link to={"/checkout"} className="li-button li-button-fullwidth">
          <span>Thanh toán</span>
        </Link>
      </div>
    </div>
  );
};

export default MiniCart;
