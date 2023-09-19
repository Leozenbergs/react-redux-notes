import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visibility: false
}

export const modalSlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.visibility = action.payload
    }
  }
});


export const { toggle } = modalSlice.actions

export default modalSlice.reducer
