import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/movieReducer";

import { composeWithDevTools } from "redux-devtools-extension";
import { bannerReducer } from "./reducers/bannerReducer";
import { cinemaBrandReducer } from "./reducers/cinemaBrandReducer";
import { cinemaListReducer } from "./reducers/cinemaListReducer";

const rootReducer = combineReducers({
  //state ứng dụng
  movieReducer: movieReducer,
  bannerReducer: bannerReducer,
  cinemaListReducer: cinemaListReducer,
  cinemaBrandReducer: cinemaBrandReducer,
});

const middleware = [thunk];
const customCompose = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, customCompose);
