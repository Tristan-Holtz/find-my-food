import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import pageReducer from "./pageReducer";
import currentPageReducer from "./currentPageReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  currentPages: pageReducer,
  currentPage: currentPageReducer,
});

export default rootReducer;
