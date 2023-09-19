import { useDispatch } from "react-redux";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

import { NoteType } from "../types/Notes";
import { deleteNote } from '../redux/reducers/notesSlice.js'
import './NotesList.css'


type PropsType = {
  note: NoteType;
}


const secondaryText = ((note: NoteType) =>
  <>
    <Typography
      sx={{ display: 'inline' }}
      component="span"
      variant="body2"
      color="#fafafa"
    >
      {note.message}
    </Typography>
  </>
)

export default function NotesListItem(props: PropsType) {
  const dispatch = useDispatch()

  function removeNote() {
    dispatch(deleteNote(props?.note))
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360 }} className="note-list-card-item">
      <button title="Delete" onClick={() => removeNote()} className="btn-delete">x</button>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.note?.title}
          secondary={secondaryText(props.note)}
        >
        </ListItemText>
      </ListItem>
    </List>
  )
}