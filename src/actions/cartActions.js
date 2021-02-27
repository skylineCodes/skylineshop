import axios from 'axios';
import {
  CART_REMOVE_ITEM_REQUEST,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_FAIL,
  CART_CREATE_REQUEST,
  CART_CREATE_FAIL,
  CART_DETAILS_REQUEST,
  CART_DETAILS_SUCCESS,
  CART_DETAILS_FAIL,
  ALL_CART_REQUEST,
  ALL_CART_SUCCESS,
  ALL_CART_FAIL,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const addToCart = (cart) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/api/cart`, cart, config);
  } catch (e) {
    dispatch({
      type: CART_CREATE_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const getAllCart = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALL_CART_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/cart`, config);

    dispatch({
      type: ALL_CART_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ALL_CART_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const getCartDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/cart/${id}`, config);

    dispatch({
      type: CART_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: CART_DETAILS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_REMOVE_ITEM_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/cart/${id}`, config);

    dispatch({
      type: CART_REMOVE_ITEM_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: CART_REMOVE_ITEM_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
