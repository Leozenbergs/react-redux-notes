import { Box } from "@mui/material";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Draggable from "react-draggable";

const noteStyle = {
  backgroundColor: '#ffa500',
  padding: 3,
  borderRadius: 1,
  mb: 2,
  cursor: 'grab',
  textAlign: 'left',
}

type NoteParamType = {
  title: string |
    number | boolean | ReactElement<any, string | JSXElementConstructor<any>> |
    Iterable<ReactNode> | ReactPortal | null | undefined;
  message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> |
    Iterable<ReactNode> | ReactPortal | null | undefined; }

export default function NotesCanvas(props: { notes: any; }) {
  const { notes } = props
  const noteItems = notes?.data?.Items


  return (
    <>
      {noteItems.map((note: NoteParamType, index: number) =>
        <Draggable key={index}>
          <Box
            sx={noteStyle}
          >
            <h1 style={{
              marginBottom: '50px'
            }}>
              {note.title}
            </h1>
            <div style={{
              marginBottom: '50px'
            }}>
              {note.message}
            </div>
          </Box>
        </Draggable>
      )}
    </>
  )
}