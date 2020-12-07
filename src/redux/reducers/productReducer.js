import { ADD_PRODUCT} from '../actions/types';

const initialState = {
    products: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_PRODUCT:
        return { 
            ...state,
            products: [...state.products, action.payload]
        }
    default:
        return state;
  }
}