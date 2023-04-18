import { Box, Typography } from "@mui/material";
import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../Redux/Action/action";

const ProductDetails = () => {
  const [productData, setProductData] = useState({});
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  let { mrp } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productList.length) {
      const product = productList.filter((res) =>res.mrp.mrp ===mrp);
      setProductData(product);
    }
  }, []);

  console.log(mrp);

  return (
    <div id="productdetails">
        {console.log(productData,'productData=--====================')}
      <Box className="d-flex">
        <div>
          <img
            src="#"
            alt="fruits"
          />
        </div>
        <div>
          <Typography>Potato</Typography>
        </div>
      </Box>
    </div>
  );
};

export default ProductDetails;
