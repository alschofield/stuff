import { configureStore } from '@reduxjs/toolkit';

// pages
import homeReducer from '../features/pages/home/homeSlice';
import musicReducer from '../features/pages/music/musicSlice';
import projectsReducer from '../features/pages/projects/projectsSlice';

// main components
import footerReducer from '../features/main-components/footer/footerSlice';
import navReducer from '../features/main-components/nav/navSlice';

// components


export default configureStore({
  reducer: {
    // page
    home: homeReducer,
    music: musicReducer,
    projects: projectsReducer,

    // main components
    footer: footerReducer,
    nav: navReducer,

    // components
  },
});
