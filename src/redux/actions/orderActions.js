import {ADD_ORDER, CLOSE_ORDER_MODAL, OPEN_ORDER_MODAL} from './types';


export const addOrder = (order) => dispatch => {
        dispatch({
          type: ADD_ORDER,
          payload: order
        });
  };

  export const closeOrderModal = () => dispatch => {
    dispatch({
      type: CLOSE_ORDER_MODAL
    });
};

export const openOrderModal = () => dispatch => {
    dispatch({
      type: OPEN_ORDER_MODAL
    });
};



