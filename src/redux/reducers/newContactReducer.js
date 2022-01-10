const initialState = {
   number: '',
   fname: '',
   lname: '',
   dob: '',
   email: '',
   occupation: '',
   designation: '',
}

export const newContactReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case 'CHANGE_NUMBER':
         return {
            ...state,
            number: payload,
         }
      case 'CHANGE_FNAME':
         return {
            ...state,
            fname: payload,
         }
      case 'CHANGE_LNAME':
         return {
            ...state,
            lname: payload,
         }
      case 'CHANGE_DOB':
         return {
            ...state,
            dob: payload,
         }
      case 'CHANGE_EMAIL':
         return {
            ...state,
            email: payload,
         }
      case 'CHANGE_OCCUPATION':
         return {
            ...state,
            occupation: payload,
         }
      case 'CHANGE_DESIGNATION':
         return {
            ...state,
            designation: payload,
         }
      case 'CLEAR_INFO':
         return {
            number: '',
            fname: '',
            lname: '',
            dob: '',
            email: '',
            occupation: '',
            designation: '',
         }
      default:
         return state
   }
}
