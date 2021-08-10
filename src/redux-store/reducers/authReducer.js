import jwt_decode from "jwt-decode";
import { CLOSE_LOADER, LOGIN_ERRORS, REGISTER_ERROR, REMOVE_TOKEN, SET_LOADER, SET_TOKEN } from "../actionTypes/authTypes";
const initialState = {
  loading: false,
  registerErrors: [],
  loginErrors: [],
  token: "",
  user: "",
};
const verifyToken = (token) => {
  const decodedToken = jwt_decode(token);
  const validateToken = new Date(decodedToken.exp * 1000);
  if (new Date() > validateToken) {
    localStorage.removeItem(token);
  } else {
    return decodedToken;
  }
};
const token = localStorage.getItem("token");
if (token) {
  const decodedUser = verifyToken(token);
  const { user } = decodedUser;
  initialState.user = user;
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, loading: true };
    case CLOSE_LOADER:
      return { ...state, loading: false };
    case REGISTER_ERROR:
      return { ...state, registerErrors: action.payload };
    case SET_TOKEN:
      const decoded = verifyToken(action.payload);
      const { user, token } = decoded;
      return { ...state, token, user, loginErrors:[], registerErrors:[] };
    case REMOVE_TOKEN:
      return {...state, token:"", user:action.payload}
    case LOGIN_ERRORS:
      return {...state, loginErrors:action.payload}
    default:
      return state;
  }
};

export default authReducer;
