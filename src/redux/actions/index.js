// CONTACT ACTIONS
export const newContact = (data) => {
   return {
      type: 'NEW_CONTACT',
      payload: data,
   }
}

export const toggleFav = (data) => {
   return {
      type: 'TOGGLE_FAVORITE',
      payload: data,
   }
}

// NEW CONTACT ACTIONS
export const changeNumber = (data) => {
   return {
      type: 'CHANGE_NUMBER',
      payload: data,
   }
}

export const changeFname = (data) => {
   return {
      type: 'CHANGE_FNAME',
      payload: data,
   }
}

export const changeLname = (data) => {
   return {
      type: 'CHANGE_LNAME',
      payload: data,
   }
}

export const changeDob = (data) => {
   return {
      type: 'CHANGE_DOB',
      payload: data,
   }
}

export const changeEmail = (data) => {
   return {
      type: 'CHANGE_EMAIL',
      payload: data,
   }
}

export const changeOccupation = (data) => {
   return {
      type: 'CHANGE_OCCUPATION',
      payload: data,
   }
}

export const changeDesignation = (data) => {
   return {
      type: 'CHANGE_DESIGNATION',
      payload: data,
   }
}

export const clearContact = (data) => {
   return {
      type: 'CLEAR_INFO',
      payload: data,
   }
}

// RECENT ACTIONS
export const addRecent = (data) => {
   return {
      type: 'ADD_RECENT',
      payload: data,
   }
}

// FILTER ACTIONS
export const applyFilter = (data) => {
   return {
      type: 'GET_FILTER_TERM',
      payload: data,
   }
}
