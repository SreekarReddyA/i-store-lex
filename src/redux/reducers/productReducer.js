import { ADD_PRODUCT, UPDATE_INVENTORY} from '../actions/types';

const initialState = {
    products: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_PRODUCT:
        let index = [...state.products].findIndex(prod => prod.productName===action.payload.productName);
        return index === -1 ? { 
            ...state,
            products: [...state.products, action.payload]
        } : {
            ...state,
            products: [...state.products.slice(0, index),action.payload,...state.products.slice(index+1)]

        }
    case UPDATE_INVENTORY:
        let newProductsArray = [...state.products].map(prod => {
            if (prod.productName===action.payload.productName) {
                prod.inventoryAmount = prod.inventoryAmount - action.payload.orderAmount
                return prod;
            }
            return prod;
        }); 
        return {
            ...state,
            products: [...newProductsArray]

        }
    default:
        return state;
  }
}