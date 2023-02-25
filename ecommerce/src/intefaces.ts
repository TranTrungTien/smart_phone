export type ICart = {
  id: string;
  imageLink: string;
  name: string;
  price: string;
  quantity: number;
};

export type IProductCard = {
  id: string;
  model: string;
  title: string;
  previewImageLink: string;
  priceSaleOff: string;
  originalPrice: string;
};

export type IResponse = {
  id: string;
  title: string;
  priceSaleOff: string;
  originalPrice: string;
  colors: string[];
  previewImageLink: string[];
  features: {
    title?: string;
    desc?: string;
    smallTitle?: string;
    imageLink?: string;
  }[];
  specifications: string[][];
};

export type IData = {
  [key: string]: IResponse[];
};
