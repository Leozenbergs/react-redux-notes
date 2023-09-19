import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NoteType } from '../types/Notes';
import { CircularProgress } from '@mui/material';

import NotesListItem from './NotesListItem';
import NewNoteButton from './NewNoteButton';
import { toggle } from '../redux/reducers/modalSlice.js'
import './NotesList.css'

type PropsType = {
  notes: {
    data: {
      Items: NoteType[] | undefined
    }
  }
}

export default function NotesList(props: PropsType) {
  const noteItems = props.notes?.data?.Items

  const dispatch = useDispatch()

  return (
    <Box sx={{ minWidth: 300 }} className="text-left">
      <Card
        variant="outlined"
        className="note-list-card"
      >
        <CardContent>
          <h3>My notes:</h3>
          {!!noteItems ? noteItems.map((note: NoteType, index: number) => 
            <div key={index}>
              <NotesListItem note={note}></NotesListItem>
            </div>
          ) : 
            <CircularProgress />
          }
          <div onClick={() => dispatch(toggle(true))}>
            <NewNoteButton />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}