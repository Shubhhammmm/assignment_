import { setCredentials, logout, setOpenSidebar } from "./authSlice";

// Action to set user credentials
export const setUserCredentials = (userData) => (dispatch) => {
  dispatch(setCredentials(userData));
};

// Action to logout the user
export const userLogout = () => (dispatch) => {
  dispatch(logout());
};

// Action to open or close the sidebar
export const toggleSidebar = (isOpen) => (dispatch) => {
  dispatch(setOpenSidebar(isOpen));
};
