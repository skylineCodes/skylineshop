import axios from 'axios';
import {
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
} from '../constants/blogConstants';

export const createBlog = (blog) => async (dispatch, getState) => {
    try {
    dispatch({
      type: CREATE_BLOG_REQUEST,
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

    const { data } = await axios.post(`/api/blogs`, blog, config);

    dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: data
    });
    } catch (e) {
      dispatch({
        type: CREATE_BLOG_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
};

export const listBlog= () => async (
  dispatch
) => {
  try {
    dispatch({
      type: BLOG_LIST_REQUEST,
    });

    const { data } = await axios.get(
      `/api/blogs`
    );

    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const listBlogDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/blogs/${id}`);
    console.log(data);

    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
