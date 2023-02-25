import React, { useContext, useState } from "react";
import MiniCart from "../mini_cart";
import { Button, Form, Input } from "antd";
import Login from "../modal/login";
import { AppDataContext } from "../../context";
import Modals from "../modal";
import Register from "../modal/register";

const MainHeader = () => {
  const [viewMiniCard, setViewMiniCard] = useState(false);
  const [showModal, setShowModal] = useState<{
    openLogin: boolean;
    openRegister: boolean;
    title: string;
    child: React.ReactNode | null;
  }>({
    openLogin: false,
    openRegister: false,
    title: "",
    child: null,
  });
  const { user } = useContext(AppDataContext);

  return (
    <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo pb-sm-30 pb-xs-30">
              <a href="index.html">
                <img src="/images/menu/logo/1.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
            <Form action="#" className="hm-searchbox">
              <Input type="text" placeholder="Bạn muốn tìm gì ?" />
              <button className="li-btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </Form>
            <div className="header-middle-right">
              {!user ? (
                <Button
                  onClick={() =>
                    setShowModal({
                      child: (
                        <Login
                          closeModal={() =>
                            setShowModal({
                              child: null,
                              openLogin: false,
                              openRegister: false,
                              title: "",
                            })
                          }
                        />
                      ),
                      title: "Đăng nhập",
                      openLogin: true,
                      openRegister: false,
                    })
                  }
                  className="text-lg font-semibold"
                  type="text"
                >
                  Đăng nhập
                </Button>
              ) : (
                <ul className="hm-menu">
                  <li className="hm-wishlist">
                    <a href="/">
                      <span className="cart-item-count wishlist-item-count">
                        0
                      </span>
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </li>
                  <li className="hm-minicart">
                    <div
                      onClick={() => setViewMiniCard(!viewMiniCard)}
                      className="hm-minicart-trigger"
                      style={{ paddingLeft: "30px" }}
                    >
                      <span className="item-icon"></span>
                    </div>
                    <span></span>
                    {viewMiniCard && <MiniCart />}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal.child && (
        <Modals
          footer={null}
          open={true}
          title={showModal.title}
          onCancel={() =>
            setShowModal({
              child: null,
              openLogin: false,
              openRegister: false,
              title: "",
            })
          }
        >
          <>
            {showModal.child}

            {showModal.openLogin ? (
              <p
                onClick={() =>
                  setShowModal({
                    child: (
                      <Register
                        closeModal={() =>
                          setShowModal({
                            child: null,
                            openLogin: false,
                            openRegister: false,
                            title: "",
                          })
                        }
                      />
                    ),
                    title: "Đăng Ky",
                    openLogin: false,
                    openRegister: true,
                  })
                }
                className="cursor-pointer lost-password"
              >
                <a>Chưa có tài khoản?</a>
              </p>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() =>
                  setShowModal({
                    child: (
                      <Login
                        closeModal={() =>
                          setShowModal({
                            child: null,
                            openLogin: false,
                            openRegister: false,
                            title: "",
                          })
                        }
                      />
                    ),
                    title: "Đăng ký",
                    openLogin: true,
                    openRegister: false,
                  })
                }
              >
                Bạn đã có tài khoản?
              </span>
            )}
          </>
        </Modals>
      )}
    </div>
  );
};

export default MainHeader;
