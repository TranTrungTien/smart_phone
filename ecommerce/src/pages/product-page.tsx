import { Divider } from "antd";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DetailPromotion from "../components/detail-promotion";
import Footer from "../components/footer";
import Header from "../components/header";
import PreviewProduct from "../components/preview-product";
import ProductComment from "../components/product-comment";
import ProductFeature from "../components/product-feature";
import ProductRelative from "../components/product-relative";
import ProductVoting from "../components/product-voting";
import { AppDataContext } from "../context";

const ProductPage = () => {
  const { products } = useContext(AppDataContext);
  const { model, id } = useParams();
  const product =
    model && id && products
      ? products[model].find((item: any) => item.id === id)
      : null;

  return (
    <div>
      <Header />
      {product && (
        <div className="container">
          <div className="flex justify-start items-start gap-x-3">
            <PreviewProduct images={product.previewImageLink} />
            <DetailPromotion
              id={product.id}
              model={product.model}
              colors={product.colors}
              originalPrice={product.originalPrice}
              saleOffPrice={product.priceSaleOff}
              title={product.title}
            />
          </div>
          <Divider />
          <div>
            <ProductFeature
              features={product.features}
              specifications={product.specifications.map((item: any) => ({
                key: item[0],
                value: item[1],
              }))}
            />
          </div>
          <Divider />
          <ProductRelative model={model} />
          <Divider />
          <ProductVoting />
          <Divider />
          <ProductComment />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
