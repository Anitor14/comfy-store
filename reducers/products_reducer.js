import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions/action";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    console.log("it is opened");
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = [];
    action.payload.map((product) => {
      if (product.featured === true) {
        featured_products.push(product);
      }
    });
    console.log(featured_products);
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: featured_products,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action.type`);
};

export default products_reducer;
