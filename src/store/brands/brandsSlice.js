import { createSlice } from '@reduxjs/toolkit';

export const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    isLoadingBrands: true,
    brands: [],
    errorMessage: null,
  },
  reducers: {
    onLoadBrands: (state, { payload = [] }) => {
      state.isLoadingBrands = false;
      state.errorMessage = null;
      payload.forEach((brand) => {
        const exists = state.brands.some(
          (stateBrand) => stateBrand._id === brand._id
        );

        if (!exists) {
          state.brands.push(brand);
        }
      });
    },
    onSetErrorMessage: (state, { payload }) => {
      state.isLoadingBrands = false;
      state.brands = [];
      state.errorMessage = payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { onLoadBrands, onSetErrorMessage } = brandsSlice.actions;
