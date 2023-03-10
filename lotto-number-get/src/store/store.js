import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import { lottoNumberReducers } from "../reducer/lottoNumbers";

const rootReducer = combineReducers({
  numbers: lottoNumberReducers,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: hardSet,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
