import { Link } from "react-router-dom";
import { IProductCard } from "../intefaces";
import { message } from "antd";
import axios from "axios";
import { useContext } from "react";
import { AppDataContext } from "../context";

type IProps = IProductCard;

const ProductCard = ({
  id,
  model,
  previewImageLink,
  originalPrice,
  priceSaleOff,
  title,
}: IProps) => {
  const { user } = useContext(AppDataContext);
  return (
    <div className="col-lg-12 max-w-[300px]">
      <div className="single-product-wrap">
        <div className="product-image">
          <Link to={`/${model}/${id}`}>
            <img
              src={previewImageLink}
              alt="cart products"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "http://localhost:8080/api/images/" + previewImageLink;
              }}
            />
          </Link>
          <span className="sticker">New</span>
        </div>
        <div className="product_desc">
          <div className="product_desc_info">
            <div className="product-review">
              <h5 className="manufacturer">
                <a href="shop-left-sidebar.html">Apple</a>
              </h5>
              <div className="rating-box">
                <ul className="rating">
                  <li>
                    <i className="fa fa-star-o"></i>
                  </li>
                  <li>
                    <i className="fa fa-star-o"></i>
                  </li>
                  <li>
                    <i className="fa fa-star-o"></i>
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o"></i>
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
              </div>
            </div>
            <h4>
              <Link className="product-name" to={`/${model}/${id}`}>
                {title}
              </Link>
            </h4>
            <div className="price-box">
              <span className="new-price">{priceSaleOff}</span>
              <del className="text-sm opacity-60">{originalPrice}</del>
            </div>
            <div className="countersection">
              <div className="li-countdown"></div>
            </div>
          </div>
          <div className="add-actions">
            <ul className="add-actions-link">
              <li className="add-cart active">
                <span
                  onClick={async () => {
                    if (!originalPrice) {
                      message.error("Ngừng kinh doanh");
                      return;
                    }
                    if (!user) {
                      message.error("Vui lòng đăng nhập");
                      return;
                    }
                    const data = {
                      userId: user.id,
                      productId: id,
                      quantity: 1,
                      price: priceSaleOff,
                      color: "Xanh",
                      model,
                      totalPrice: priceSaleOff,
                    };
                    await axios.post(
                      "http://localhost:8080/api/create-cart",
                      data
                    );
                    message.success("Đã thêm vào giỏ hàng");
                  }}
                  className="cursor-pointer"
                >
                  Thêm vào giỏ hàng
                </span>
              </li>
              <li>
                <a className="links-details">
                  <i className="fa fa-heart-o"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="quick view"
                  className="quick-view-btn"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
