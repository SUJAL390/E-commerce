// import {configureStore} from '@reduxjs/toolkit';
// import rootReducers from './reducer';
// const store = configureStore({
//     reducer: rootReducers,

// })

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
 

    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import rootReducers from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can whitelist specific reducers to persist
  // whitelist: ['cart'] 
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
