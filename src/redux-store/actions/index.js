import axios from "axios";
import {
  CLOSE_LOADER,
  LOGIN_ERRORS,
  REGISTER_ERROR,
  SET_LOADER,
  SET_TOKEN,
} from "../actionTypes/authTypes";

export const registerAction = (users) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADER });
      const { data } = await axios.post("/register", users);
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("token", data.token);
      dispatch({ type: SET_TOKEN, payload: data.token });
    } catch ({ response }) {
      dispatch({ type: CLOSE_LOADER });
      if (response.data.errors) {
        dispatch({ type: REGISTER_ERROR, payload: response.data.errors });
      } else {
        dispatch({ type: REGISTER_ERROR, payload: response.data });
      }
    }
  };
};

export const loginAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADER });
      const {data} = await axios.post("/login", user);
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("token", data.token);
      dispatch({ type: SET_TOKEN, payload: data.token });
      //console.log(data.token);
    } catch ({response}) {
      dispatch({ type: CLOSE_LOADER });
      if (response.data.errors) {
        dispatch({ type: LOGIN_ERRORS, payload: response.data.errors });
      } else {
        dispatch({ type: LOGIN_ERRORS, payload: response.data });
      }
    }
  };
};
