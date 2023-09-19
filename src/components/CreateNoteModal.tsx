import { Modal, Box, Typography, Button, TextField, FormControl } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { toggle } from '../redux/reducers/modalSlice.js'
import { addNewNote } from '../redux/reducers/notesSlice.js'
import { useState } from "react";



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#303030',
  borderRadius: '10px',
  boxShadow: 24,
  color: '#fff',
  pt: 2,
  px: 4,
  pb: 3,
};

const componentStyle = {
  root: {
    borderColor: '#fff',
    '& .MuiInputBase-root': {
      color: 'white',
      borderColor: "#fff"
    },
    ".MuiInputBase-root::placeholder": {
      color: 'white',
    },
  },
  input: {
    borderColor: '#fff',
    color: "#fff",
    "& ::placeholder": {
      color: 'white',
    },
  },
  
};

function CreateNoteModal(props: { visibility?: any; classes?: any; }) {
  const { classes, visibility } = props;
  const dispatch = useDispatch()

  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  function confirmModal() {
    dispatch(addNewNote({title, message}))
    dispatch(toggle(false))
  }

  return (
    <Modal
        open={visibility}
        onClose={() => dispatch(toggle(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-centered"
      >
        <Box
          sx={style}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb:2}}>
            Create new note
          </Typography>

          <FormControl sx={{width: '100%'}}>
            <input
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              className={classes.root}
              placeholder="Title"
              style={{marginBottom: '15px', borderRadius: '10px', padding: '8px 12px', border: '1px solid #333'}}
            />
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              className={classes.root}
              placeholder="Message"
              style={{marginBottom: '15px', borderRadius: '10px', padding: '8px 12px', border: '1px solid #333'}}
            />
          </FormControl>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(toggle(false))}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => confirmModal()}
              disabled={!message || !title}
            >
              Create
            </Button>
          </div>
        </Box>
      </Modal>
  )
}

export default withStyles(componentStyle)(CreateNoteModal);