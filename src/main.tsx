import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// style
import './index.css'
import theme from './plugins/mui.tsx'
import { ThemeProvider } from '@mui/material/styles';

//store
import store from './redux/store.ts'
import { fetchNotes } from './redux/reducers/notesSlice.js'

store.dispatch(fetchNotes());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
