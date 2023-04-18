import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SET_CHECKBOX_VALUE='SET_CHECKBOX_VALUE'

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    axios.get('https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products')
      .then(response => {
        const products = response.data.products;
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: errorMsg });
      });
  };
};
