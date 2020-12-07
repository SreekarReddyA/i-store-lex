import {ADD_PRODUCT, UPDATE_INVENTORY, CLOSE_PRODUCT_MODAL, OPEN_PRODUCT_MODAL} from './types';


export const addProduct = (product) => dispatch => {
        dispatch({
          type: ADD_PRODUCT,
          payload: product
        });
  };

  export const updateProductInventory = (product) => dispatch => {
    dispatch({
        type: UPDATE_INVENTORY,
        payload: product
      });
    }

    export const closeProductModal = () => dispatch => {
        dispatch({
          type: CLOSE_PRODUCT_MODAL
        });
    };
    
    export const openProductModal = () => dispatch => {
        dispatch({
          type: OPEN_PRODUCT_MODAL
        });
    };