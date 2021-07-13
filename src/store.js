import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
}

const initialState = {
  deals: []
}
const persistedReducer = persistReducer(persistConfig, reducer)

export function reducer(state = initialState, action) {
  console.log(state.deals);
  switch (action.type) {
    case "SET_DEALS":
      return {...state, deals: action.payload}
    case "ADD_DEAL":
      state.deals.find((dealsByCause) => {
        return dealsByCause.cause === action.payload.cause;
      }).items.push(action.payload);
      return state
    default:
      return state
  }
}

const fn = () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return {store, persistor}
}
export default fn;
