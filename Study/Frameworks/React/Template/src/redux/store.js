import { configureStore } from '@reduxjs/toolkit';

// pages
import homeReducer from '../features/pages/home/homeSlice';

// main components
import footerReducer from '../features/main-components/footer/footerSlice';
import navReducer from '../features/main-components/nav/navSlice';

// components


export default configureStore({
  reducer: {
    // page
    home: homeReducer,

    // main components
    footer: footerReducer,
    nav: navReducer,

    // components
  },
});
