import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "../store/reducers/authReducer";
import alertReducer from "../store/reducers/alertReducer";
import friendsReducer from "../store/reducers/friendsReducer";
import chatReducer from "../store/reducers/chatReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	alert: alertReducer,
	friends: friendsReducer,
	chat: chatReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
