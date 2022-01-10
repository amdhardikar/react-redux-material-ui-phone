import React, { useState } from 'react'
import {
   SpeedDialIcon,
   Modal,
   Box,
   TextField,
   Button,
   Stack,
   Typography,
   Tooltip,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
   changeNumber,
   changeFname,
   changeLname,
   changeDob,
   changeEmail,
   changeOccupation,
   changeDesignation,   
   newContact,
   clearContact,
} from '../redux/actions'

const styles = {
   box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      padding: '32px',
   },
   button: {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      right: '50%',
      borderRadius: '50%',
      backgroundColor: '#1565c0',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      transition: 'transform 0.375s ease',
   },
   icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      color: 'white',
   },
}

function NewContact() {
   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)
   const contact = useSelector((state) => state.newContact)
   const dispatch = useDispatch()

   return (
      <div>
         <div variant="contained" style={styles.button} onClick={handleOpen}>
            <Tooltip title="Add Contact" arrow>
               <SpeedDialIcon style={styles.icon} />
            </Tooltip>
         </div>
         <Modal
            open={open}
            onClose={() => {
               handleClose()
               dispatch(clearContact())
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box component="form" sx={styles.box}>
               <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  New Contact
               </Typography>
               <TextField
                  fullWidth
                  margin="dense"
                  label="Phone Number"
                  variant="outlined"
                  value={contact.number}
                  onChange={(e) => dispatch(changeNumber(e.target.value))}
               />
               <TextField
                  fullWidth
                  margin="dense"
                  label="First Name"
                  variant="outlined"
                  value={contact.fname}
                  onChange={(e) => dispatch(changeFname(e.target.value))}
               />
               <TextField
                  fullWidth
                  margin="dense"
                  label="Last Name"
                  variant="outlined"
                  value={contact.lname}
                  onChange={(e) => dispatch(changeLname(e.target.value))}
               />
               <TextField
                  fullWidth
                  id="date"
                  margin="dense"
                  type="date"
                  InputLabelProps={{
                     shrink: false,
                  }}
                  value={contact.dob}
                  onChange={(e) => dispatch(changeDob(e.target.value))}
               />
               <TextField
                  fullWidth
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  value={contact.email}
                  onChange={(e) => dispatch(changeEmail(e.target.value))}
               />
               <TextField
                  fullWidth
                  margin="dense"
                  label="Occupation"
                  variant="outlined"
                  value={contact.occupation}
                  onChange={(e) => dispatch(changeOccupation(e.target.value))}
               />
               <TextField
                  fullWidth
                  margin="dense"
                  label="Designation"
                  variant="outlined"
                  value={contact.designation}
                  onChange={(e) => dispatch(changeDesignation(e.target.value))}
               />
               <Stack spacing={2} direction="row" sx={{ mt: 1 }}>
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={() => {
                        dispatch(newContact(contact))
                        handleClose()
                        dispatch(clearContact())
                     }}>
                     Save
                  </Button>
                  <Button
                     variant="contained"
                     color="error"
                     onClick={() => {
                        dispatch(clearContact())
                        handleClose()
                     }}>
                     Cancel
                  </Button>
               </Stack>
            </Box>
         </Modal>
      </div>
   )
}

export default NewContact
