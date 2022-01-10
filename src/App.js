import './App.css'
import Header from './component/Header'
import Recent from './component/Recents'
import Contact from './component/Contacts'
import Favorite from './component/Favorites'
import NewContact from './component/NewContact'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Box from '@mui/material/Box'
import SearchBar from './component/SearchBar'

const styles = {
   boxStyle: {
      width: 400,
      margin: 'auto',
      height: '100vh',
      overflowX: 'auto',
   },
   mainStyle: {
      position: 'relative',
      zIndex: '0',
      marginTop: '100px',
   },
}

function App() {
   const [value, setValue] = useState(1)

   return (
      <Provider store={store}>
         <Box style={styles.boxStyle}>
            <Header value={value} setValue={setValue} />
            <SearchBar />
            <div style={styles.mainStyle}>
               {value === 0 && <Recent />}
               {value === 1 && <Contact />}
               {value === 2 && <Favorite />}
            </div>
            <NewContact />
         </Box>
      </Provider>
   )
}

export default App
