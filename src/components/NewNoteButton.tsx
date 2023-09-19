import { List, ListItem, ListItemText } from "@mui/material";
import './NotesList.css'

export default function NotesListItem() {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }} className="note-list-card-item">
      <ListItem alignItems="flex-start">
        <ListItemText>
          <div className="new-note-button">+</div>
        </ListItemText>
      </ListItem>
    </List>
  )
}