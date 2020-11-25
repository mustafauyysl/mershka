import * as actionTypes from './actionTypes';

export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
  }
  
  export function getProducts(restaurantId) {
    return function (dispatch) {
      let url = "http://localhost:3000/products";
      if (restaurantId) {
        url = url + "?restaurantId=" + restaurantId;
      }
      return fetch(url)
        .then((response) => response.json())
        .then((result) => dispatch(getProductsSuccess(result)));
    };
  }

export function selectProduct(product) {
  return { type: actionTypes.SELECT_PRODUCT, payload: product };
}

export function showProductDetail(isVisible) {
  return { type: actionTypes.SHOW_PRODUCT_DETAIL, payload: isVisible }
}