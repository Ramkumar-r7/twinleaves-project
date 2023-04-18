import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_CHECKBOX_VALUE,
} from "../Action/action";

const initialState = {
  loading: false,
  products: [],
  error: "",
  checkboxValue: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    case SET_CHECKBOX_VALUE:
      return {
        ...state,
        checkboxValue: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
