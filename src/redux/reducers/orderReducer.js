import { ADD_ORDER} from '../actions/types';

const initialState = {
    orders: []
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ORDER:
        return { 
            ...state,
            orders: [...state.orders, action.payload]
        }
    default:
        return state;
  }
}