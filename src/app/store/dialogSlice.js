import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: false,
  options: {
    type: 'base',
    title: '제목',
    content: '내용',
    children: null,
    event: null,
  },
  datas: null,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action) => {
      state.state = true;
      state.options = {
        type: !action.payload.type ? initialState.options.type : action.payload.type,
        title: !action.payload.title ? initialState.options.title : action.payload.title,
        content: !action.payload.content ? initialState.options.content : action.payload.content,
        children: !action.payload.children
          ? initialState.options.children
          : action.payload.children,
        event: !action.payload.event ? initialState.options.event : action.payload.event,
      };
    },
    closeDialog: (state, action) => {
      state.state = false;
      state.datas = initialState.datas;
    },
    setDatas: (state, action) => {
      state.datas = action.payload;
    },
    resetDatas: (state, action) => {
      state.datas = initialState.datas;
    },
  },
});

export const { openDialog, closeDialog, setDatas, resetDatas } = dialogSlice.actions;

export const getDialogState = ({ dialog }) => dialog.state;
export const getDialogDatas = ({ dialog }) => dialog.datas;
export const getDialogOptions = ({ dialog }) => dialog.options;

export default dialogSlice.reducer;