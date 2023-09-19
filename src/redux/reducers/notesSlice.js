import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../plugins/axios'


const initialState = {
  notes: undefined
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state) => {
      fetchNotes()
    },
    addNote: (state, action) => {
      const newNote = action.payload
      addNewNote(newNote)
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchNotes.pending, (state, action) => {
        state.status = 'loading'
    })
    .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const loadedNotes = action.payload

        state.notes = loadedNotes
    })
    .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    })
    .addCase(addNewNote.fulfilled, (state, action) => {
      state.notes.data.Items.push(action.payload)
    })
    .addCase(deleteNote.fulfilled, (state, action) => {
      if (!action.payload?.id) {
        console.log('Delete could not complete')
        console.log(action.payload)
        return;
      }
      const { id } = action.payload;
      const notes = state.notes.data.Items.filter(note => note.id !== id);
      state.notes.data.Items = notes;
    })
  }
})

export const fetchNotes = createAsyncThunk('noteList/fetchNotes', async () => {
  try {
    const data = await api.get('notes')
    return data
  } catch (err) {
    console.log(err)
  }
})

export const addNewNote = createAsyncThunk('notes/addNewNote', async (payload) => {
  const response = await api.post('new-note', payload)
  return response.data
})


export const deleteNote = createAsyncThunk('notes/deletePost', async (payload) => {
  const { id } = payload;
  try {
      const response = await api.delete(`notes/${id}`)
      if (response?.status === 200) return payload;
      return `${response?.status}: ${response?.statusText}`;
  } catch (err) {
      return err.message;
  }
})


// Action creators are generated for each case reducer function
export const { setNotes } = notesSlice.actions

export default notesSlice.reducer