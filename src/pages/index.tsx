import { Container } from "@mui/material";

import './index.css'
import NotesList from "../components/NotesList";

// import { addNewNote } from '../redux/reducers/notesSlice.js'
import { useSelector } from "react-redux";
import CreateNoteModal from "../components/CreateNoteModal";
import NotesCanvas from "../components/NotesCanvas";


export default () => {
  const { notes } = useSelector((state : any) => state.noteList)
  const { visibility } = useSelector((state : any) => state.modalVisibility)

  return (
    <Container maxWidth="sm">
      <div className="notesList">
        {!!notes && <NotesList notes={notes} />}
      </div>
      {!!notes && <NotesCanvas notes={notes} />}
      <CreateNoteModal visibility={visibility} />
    </ Container>
  )
}