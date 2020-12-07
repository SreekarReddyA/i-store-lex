import {ADD_PRODUCT} from './types';


export const addProduct = (product) => dispatch => {
        console.log(product);
        dispatch({
          type: ADD_PRODUCT,
          payload: product
        });
  };


