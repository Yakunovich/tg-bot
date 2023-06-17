import React from "react";
import Button from "../Button/Button";
import "./ProductItemInfo.css";
import { products } from "../../api/ProductList";
import { useLocation, useParams } from "react-router-dom";

const ProductItemInfo = (props) => {

  let { id } = useParams();
  const product = products[id - 1];

  return (
    <div className={"productInfo"}>
      <div className={"img"} />
      <div className={"title"}>{product.title}</div>
      <div className={"description"}>{product.description}</div>
      <div className={"price"}>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <Button className={"add-btn"} /*>onClick={}*/>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItemInfo;
