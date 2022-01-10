import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilter } from '../redux/actions'

const styles = {
   searchBar: {
      position: 'fixed',
      zIndex: '1',
      width: '398px',
      top: '50px',
      margin: '0',
      height: '60px',
   },
}

function SearchBar() {
   const filters = useSelector((state) => state.filters)
   const dispatch = useDispatch()

   return (
      <div style={styles.searchBar}>
         <TextField
            fullWidth
            label="Search"
            sx={{ backgroundColor: 'white' }}
            value={filters}
            onChange={(e) => dispatch(applyFilter(e.target.value))}
         />
      </div>
   )
}

export default SearchBar
