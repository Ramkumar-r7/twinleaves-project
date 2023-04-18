import "./categorySideBar.scss";
import {
  Box,
  Divider,
  InputAdornment,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_CHECKBOX_VALUE } from "../../Redux/Action/action";

const CategorySideBar = ({
  productList,
  onCheckedItemsChange,
  onCheckedcategoryChange,
}) => {
  const checkboxvalue = useSelector((state) => state?.reducer?.checkboxValue);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryCount = {};
  for (const product of productList || []) {
    const category = product.category_level_1;
    categoryCount[category] = (categoryCount[category] || 0) + 1;
  }

  const brandList = () => {
    if (productList) {
      const Clist = productList?.map((product) => product.brand);
      return [...new Set(Clist)].filter((res) => res != null);
    }
  };

  const handleCheck = (event) => {
    const value = event.target.value;
    const index = checked.indexOf(value);
    const newChecked = [...checked];
    if (index === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(index, 1);
    }
    setChecked(newChecked);
    onCheckedItemsChange(newChecked);
  };

  const filteringProducts = brandList()?.filter((brand) =>
    brand.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleGetCategory = (category) => {
    onCheckedcategoryChange(category);
    setSelectedCategory(category);
  };

  useEffect(() => {
    brandList();
  }, []);

  return (
    <div id="categorySideBar">
      <Box className="sidebar-box mb-5">
        <Box className="category-box">
          <Typography className="category">Categories</Typography>
          <div className="green-border-container">
            <div className="green-border"></div>
          </div>
        </Box>
        <Typography className="category-fruit">Fruits and Veg</Typography>
        {Object.entries(categoryCount).map(([category, count]) => (
          <Typography
            className={
              category === selectedCategory
                ? "active-category category-list"
                : "category-list"
            }
            onClick={() => handleGetCategory(category)}
          >
            {category} ({count})
          </Typography>
        ))}
      </Box>
      <Box className="brand-box">
        <Box className="brand-header">
          <Typography className="brand"> Brand</Typography>
          <div className="green-border-container">
            <div className="green-border"></div>
          </div>
        </Box>
        <TextField
          onChange={(e) => setSearchValue(e.target.value)}
          className="mt-2"
          placeholder="Search by brand"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />

        {filteringProducts?.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checked.indexOf(option) !== -1}
                onChange={handleCheck}
                value={option}
                className="checkbox"
              />
            }
            label={option}
          />
        ))}
      </Box>
    </div>
  );
};

export default CategorySideBar;
