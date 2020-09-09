import { combineReducers } from "redux";
import navbarReducer from "./navbar";
import productsReducer from "./products";
import sidebarReducer from "./sidebar";

const rootReducer = combineReducers({
	navbar: navbarReducer,
	products: productsReducer,
	sidebar: sidebarReducer,
});

export default rootReducer;
