import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../ui/uiSlicer';
import mainPageReducer from '../components/Main/mainPageSlice';
export const store = configureStore({
  reducer: {
    uiStore: uiReducer,
    mainPageStore: mainPageReducer,
  },
});
