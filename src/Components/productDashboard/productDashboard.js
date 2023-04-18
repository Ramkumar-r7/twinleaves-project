import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Action/action";
import ProductCard from "../ProductCard/productCard";
import CategorySideBar from "../CategorySideBar/categorySideBar";
import { Divider } from "@mui/material";

const ProductDashboard = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState([]);
  const productList = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);

  const handleCheckedItemsChange = (items) => {
    console.log(items);
    setCheckedItems(items);
  };

  const onCheckedcategoryChange = (category) => {
    const result = productList?.filter(
      (product) => product.category_level_1 === category
    );
    setProducts(result);
  };
  useEffect(() => {
    const result = productList?.filter((product) =>
      checkedItems.includes(product.brand)
    );
    setProducts(result);
  }, [checkedItems]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="d-flex">
      <CategorySideBar
        productList={productList ?? []}
        onCheckedItemsChange={handleCheckedItemsChange}
        onCheckedcategoryChange={onCheckedcategoryChange}
      />
      <Divider orientation="vertical" flexItem />
      <ProductCard
        productList={products.length ? products : [...productList]}
      />
    </div>
  );
};

export default ProductDashboard;
