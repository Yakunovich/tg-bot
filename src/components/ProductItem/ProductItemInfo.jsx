import React from "react";
import Button from "../Button/Button";
import "./ProductItemInfo.css";
import {products} from "../../api/ProductList"
import { useLocation, useParams } from "react-router-dom";

const ProductItemInfo = (onAdd) => {
  const location = useLocation();

  let {id} = useParams();
  const product = products[id-1];

  const onAddHandler = () => {
    onAdd(product);
  };

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
      <Button className={"add-btn"} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItemInfo;
