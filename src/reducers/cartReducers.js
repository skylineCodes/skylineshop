import {
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  ALL_CART_SUCCESS,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_RESET,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
      case ALL_CART_SUCCESS:
        return {
          ...state,
          cartItems: action.payload,
        };
      case CART_REMOVE_ITEM_SUCCESS:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (x) => x._id !== action.payload.data
          ),
        };
      case CART_REMOVE_ITEM_RESET:
        return {
          ...state,
          cartItems: []
        };
      case CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload,
        };
      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        };
      default:
        return state;
    }
}