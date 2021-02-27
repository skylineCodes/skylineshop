import {
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAIL,
  CREATE_BLOG_RESET,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
} from '../constants/blogConstants';

export const blogCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return { loading: true };
    case CREATE_BLOG_SUCCESS:
      return { loading: false, success: true, blog: action.payload };
    case CREATE_BLOG_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_BLOG_RESET:
      return {};
    default:
      return state;
  }
};

export const blogListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, posts: [] };
    case BLOG_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload
      };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blogDetailsReducer = (state = { loading: true, post: {} }, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true, ...state };
    case BLOG_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };
    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
