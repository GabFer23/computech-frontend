import { createSlice } from '@reduxjs/toolkit';

export const computersSlice = createSlice({
  name: 'computers',
  initialState: {
    isLoadingComputers: true,
    computers: { content: [], totalPages: 1 },
    myComputers: [],
    activeComputer: null,
    errorMessage: null,
  },
  reducers: {
    onLoading: (state, { payload }) => {
      state.isLoadingComputers = true;
      state.errorMessage = null;
    },
    onLoadComputers: (state, { payload = [] }) => {
      state.computers.content = payload.computers;
      state.computers.totalPages = payload.totalPages;
      state.errorMessage = null;
      state.isLoadingComputers = false;
      state.activeComputer = null;
    },
    onLoadUserComputers: (state, { payload }) => {
      payload.forEach((computer) => {
        const exists = state.myComputers.some(
          (stateComputer) => stateComputer._id === computer._id
        );

        if (!exists) {
          state.myComputers.push(computer);
        }
      });
      state.errorMessage = null;
      state.isLoadingComputers = false;
      state.activeComputer = null;
    },
    onAddComputer: (state, { payload }) => {
      // * computers
      state.computers.content.push(payload);
      // * myComputers
      state.myComputers.push(payload);
    },
    onUpdateComputer: (state, { payload }) => {
      // * computers
      state.computers.content = state.computers.content.map((computer) => {
        if (computer._id === payload._id) {
          return payload;
        }
        return computer;
      });
      // * myComputers
      state.myComputers = state.myComputers.map((computer) => {
        if (computer._id === payload._id) {
          return payload;
        }
        return computer;
      });
    },
    onDeleteComputer: (state, { payload }) => {
      // * computers
      state.computers.content = state.computers.content.filter(
        (computer) => computer._id !== payload
      );
      // * myComputers
      state.myComputers = state.myComputers.filter(
        (computer) => computer._id !== payload
      );
    },
    onSetActiveComputer: (state, { payload }) => {
      state.activeComputer = payload;
      state.errorMessage = null;
      state.isLoadingComputers = false;
    },
    onSetErrorMessage: (state, { payload }) => {
      state.computers.content = [];
      state.errorMessage = payload;
      state.isLoadingComputers = false;
    },
    onLogoutComputers: (state, { payload }) => {
      state.myComputers = [];
      state.errorMessage = null;
      state.isLoadingComputers = false;
    },
  },
});
export const {
  onLoading,
  onLoadComputers,
  onLoadUserComputers,
  onSetActiveComputer,
  onSetErrorMessage,
  onAddComputer,
  onUpdateComputer,
  onDeleteComputer,
  onLogoutComputers,
} = computersSlice.actions;
