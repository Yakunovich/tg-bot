import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";
import { products } from "../../api/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./productListSlice";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state);

  //const [addedItems, setAddedItems] = useState([]);
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      products: productList,
      totalPrice: getTotalPrice(productList),
      queryId,
    };
    fetch("http://localhost:8000/web-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, [productList]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  const onAdd = (product) => {
    // const alreadyAdded = addedItems.find((item) => item.id === product.id);
    // let newItems = [];

    // if (alreadyAdded) {
    //   newItems = addedItems.filter((item) => item.id !== product.id);
    // } else {
    //   newItems = [...addedItems, product];
    // }

    dispatch(actions.addToList(product));
    dispatch(actions.getTotalPrice());
    //setAddedItems(newItems);

    if (productList .length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(productList)}`,
      });
    }
  };

  return (
    <div className={"list"}>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          onAdd={onAdd}
          className={"item"}
        />
      ))}
    </div>
  );
};

export default ProductList;
