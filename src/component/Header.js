import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import {
   Person as PersonIcon,
   Star as StarIcon,
   WatchLater as RecentIcon,
} from '@mui/icons-material'

const style = {
   navigation: {
      position: 'fixed',
      zIndex: '1',
      width: '398px',
      top: '0',
      margin: '0',
      height: '50px'
   },
}

function Header({ value, setValue }) {
   return (
      <BottomNavigation
         showLabels
         value={value}
         onChange={(event, newValue) => {
            setValue(newValue)
         }}
         style={style.navigation}>
         <BottomNavigationAction icon={<RecentIcon />} />
         <BottomNavigationAction icon={<PersonIcon />} />
         <BottomNavigationAction icon={<StarIcon />} />
      </BottomNavigation>
   )
}

export default Header
