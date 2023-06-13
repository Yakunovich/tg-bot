import React, { useState } from "react";
import Button from "../Button/Button";
import "./ProductItem.css";
import ProductItemInfo from "./ProductItemInfo";
import { Link } from "react-router-dom";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };
//   const [btnState, setBtnState] = useState(false);

//   //toggle the Modal Display State
//   const handleBtnClick = (e) => {
//     setBtnState((prev) => !prev);
//   };

  return (
    <div className={"product " + className}>
      <div className={"bordera"} onClick={(e) => handleBtnClick(e)}>
        {/* {btnState && <ProductItemInfo product={product} />}
        {!btnState && (
          <> */}
            <div className={"img"} />
            <div className={"title"}><Link to={'massage/' + product.id} onAdd = {onAdd}>{product.title}</Link></div>
            <div className={"description"}>{product.description}</div>
            <div className={"price"}>
              <span>
                Стоимость: <b>{product.price}</b>
              </span>
            </div>

            <Button className={"add-btn"} onClick={onAddHandler}>
              Добавить в корзину
            </Button>
          {/* </>
        )} */}
      </div>
    </div>
  );
};

export default ProductItem;
