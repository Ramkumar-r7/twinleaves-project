import React, { useDeferredValue, useEffect } from "react";
import "./productCard.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Box,
  Stack,
  Button,
  Grid,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productList }) => {
  const [ProductPrice, setProductPrice] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setProductPrice(event.target.value);
  };

  return (
    <div id="productCard">
      <Box className="header">
        <Typography className="header-title mb-5 ">
          Fruits & vegetables ({productList.length})
        </Typography>
        <Box className="all-product-box">
          <Typography className="all-product">
            <LocalShippingIcon /> All Products
          </Typography>
          <div className="green-border-container">
            <div className="green-border"></div>
          </div>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {productList?.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{ maxWidth: 240 }}
              key={index}
              onClick={() => navigate(`/${product?.mrp.mrp}`)}
            >
              <CardActionArea>
                <Box className="offer-box">
                  <Typography className="offer">
                    GET 42% OFF
                    <LocalOfferRoundedIcon color="red" fontSize="18px" />
                  </Typography>
                </Box>
                <Box sx={{ height: "45%" }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={product?.images?.front}
                    alt="product-img"
                    className="product-img"
                  />
                </Box>
                <CardContent>
                  <div className="active-box">
                    <span className="active-dot"></span>
                  </div>
                  <Typography
                    sx={{ mb: 0.5 }}
                    color="text.secondary"
                    className="product-freshness mt-2"
                  >
                    Fresh
                  </Typography>
                  <Typography
                    sx={{ mb: 1 }}
                    color="text.dark"
                    className="product-name"
                  >
                    {product.name}
                  </Typography>

                  <FormControl sx={{ mt: 1, minWidth: 120 }}>
                    <Select
                      value={ProductPrice}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>50kg-500</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <Box className="product-detail-box">
                    <Stack direction="row" spacing={2}>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className="offer-strike mt-2"
                      >
                        MRP {product?.mrp?.mrp}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className="current-price mt-2"
                      >
                        Rs 24.34
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <LocalShippingIcon />
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className="delivery"
                      >
                        Standard Door delivery
                      </Typography>
                    </Stack>
                    <Typography className="delivery-time mb-2">
                      9.00PM-12.00PM
                    </Typography>
                    <div class="input-group mb-2">
                      <span class="input-group-text qty-name" id="basic-addon1">
                        Qty
                      </span>
                      <input
                        type="text"
                        className="form-control qty-field"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <Button
                        variant="contained"
                        endIcon={<ShoppingBasketRoundedIcon />}
                        className="btn-add "
                      >
                        Add
                      </Button>
                    </div>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCard;
