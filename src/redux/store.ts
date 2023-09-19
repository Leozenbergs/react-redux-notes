import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './reducers/notesSlice.js'
import modalReducer from './reducers/modalSlice.js'

const store = configureStore({
  reducer: {
    noteList: notesReducer,
    modalVisibility: modalReducer
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch