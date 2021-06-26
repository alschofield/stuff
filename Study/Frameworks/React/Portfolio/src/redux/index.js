import { configureStore } from '@reduxjs/toolkit';

// pages
import homeReducer from './modules/home';

// components


export default configureStore({
  reducer: {
    // page
    home: homeReducer,

    // components
  },
});
