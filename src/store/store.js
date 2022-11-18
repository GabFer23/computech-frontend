import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { brandsSlice } from './brands/brandsSlice';
import { computersSlice } from './computers/computersSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    computers: computersSlice.reducer,
    brands: brandsSlice.reducer,
  },
});
