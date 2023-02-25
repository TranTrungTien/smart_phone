import { useContext } from "react";
import Banner from "../components/banner";
import Category from "../components/category-row";
import Footer from "../components/footer";
import Header from "../components/header";
import HotDeal from "../components/hot-deal";
import SaleOff from "../components/sale-off";
import { AppDataContext } from "../context";
import { IProductCard } from "../intefaces";

const HomePage = () => {
  const { products } = useContext(AppDataContext);

  const ip13: IProductCard[] = products
    ? products.ip13.slice(0, 4).map((item: any) => ({
        model: "ip13",
        id: item.id,
        title: item.title,
        previewImageLink: item.previewImageLink[0],
        priceSaleOff: item.priceSaleOff,
        originalPrice: item.originalPrice,
      }))
    : [];
  const ip12 = products
    ? products.ip12.slice(0, 4).map((item: any) => ({
        model: "ip12",
        id: item.id,
        title: item.title,
        previewImageLink: item.previewImageLink[0],
        priceSaleOff: item.priceSaleOff,
        originalPrice: item.originalPrice,
      }))
    : [];
  const ip11 = products
    ? products.ip11.slice(0, 4).map((item: any) => ({
        model: "ip11",
        id: item.id,
        title: item.title,
        previewImageLink: item.previewImageLink[0],
        priceSaleOff: item.priceSaleOff,
        originalPrice: item.originalPrice,
      }))
    : [];

  return (
    <div>
      <Header />
      <Banner />
      <HotDeal />
      <Category
        label="Iphone 13"
        bannerImageLink={[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDc4X1cxrfJ9zsPnWhP6PegLUIVSQFyvuiqA&usqp=CAU",
          "https://cdn.pocket-lint.com/r/s/1200x/assets/images/158557-phones-news-feature-apple-iphone-14-and-14-pro-rumours-release-date-news-and-features-image1-cudmzohxtp.jpg",
        ]}
        product={ip13}
      />
      <SaleOff />
      <Category
        label="Iphone 12"
        bannerImageLink={[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma8lAZZPXI2tMf1updW3XvwBVY-TyTcBhKQ&usqp=CAU",
          "https://cdn.sforum.vn/sforum/wp-content/uploads/2020/10/vpavic_4243_20201018_0121.0.jpg",
        ]}
        product={ip12}
      />
      <Category
        label="Iphone 11"
        bannerImageLink={[
          "https://kinhtechungkhoan.vn/stores/news_dataimages/2022/112022/06/20/08ff25259c5e12f6c326eec35197b067.jpg?rt=20221106205100",
          "https://genk.mediacdn.vn/139269124445442048/2022/1/25/photo-1-1643015426781281817536-1643086058767-16430860591582036439831.jpg",
        ]}
        product={ip11}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
