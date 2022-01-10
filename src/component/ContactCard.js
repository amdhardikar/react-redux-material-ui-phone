import React from 'react'
import { Avatar, Rating, IconButton } from '@mui/material'
import { Phone as PhoneIcon } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { addRecent, toggleFav } from '../redux/actions'

// function generateColor() {
//    return Math.floor(Math.random() * 233 + 11).toString(16)
// }

function stringToColor(string) {
   let hash = 0
   let i
   /* eslint-disable no-bitwise */
   for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
   }
   let color = '#'
   for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.substr(-2)
   }
   /* eslint-enable no-bitwise */
   return color
}

function stringAvatar(name) {
   return {
      sx: {
         // bgcolor: '#' + generateColor() + generateColor() + generateColor(),
         bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
   }
}

const styles = {
   container: {
      display: 'flex',
      height: '80px',
      padding: '10px 20px',
      marginBottom: '5px',
      alignItems: 'center',
      backgroundColor: '#fcfcfc',
      borderRadius: '5px',
   },
   card_avatar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
      width: '55px',
   },
   card_body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      flex: 1,
   },
   card_favorite: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '50px',
   },
   card_name: {
      margin: 0,
      fontSize: '19px',
      fontWeight: '400',
   },
   card_number: {
      margin: 0,
      fontSize: '15px',
      color: '#606060',
      fontWeight: '400',
   },
   card_call: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '50px',
   },
}

function ContactCard({ contact, timestamp }) {
   const dispatch = useDispatch()

   return (
      <div style={styles.container}>
         <div style={styles.card_avatar}>
            <Avatar
               {...stringAvatar(contact.fname.concat(' ', contact.lname))}
               style={{
                  fontSize: '18px',
                  lineHeight: '20px',
               }}
            />
         </div>
         <div style={styles.card_body}>
            <p style={styles.card_name}>
               {contact.fname.concat(' ', contact.lname)}
            </p>
            <small style={styles.card_number}>{`+91 ${contact.number}`}</small>
            {timestamp ? (
               <small style={styles.card_number}>{timestamp}</small>
            ) : (
               ''
            )}
         </div>
         <div style={styles.card_favorite}>
            <Rating
               value={contact.favorite ? 1 : 0}
               max={1}
               onChange={() => dispatch(toggleFav(contact.id))}
            />
         </div>
         <div style={styles.card_call}>
            <IconButton
               aria-label="call"
               color="primary"
               onClick={() =>
                  dispatch(
                     addRecent({
                        ...contact,
                        timestamp: new Date().toLocaleString('en-IN'),
                     })
                  )
               }>
               <PhoneIcon />
            </IconButton>
         </div>
      </div>
   )
}

export default ContactCard
