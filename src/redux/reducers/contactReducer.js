import data from '../data.json'

const initialState = data

export const contactReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case 'NEW_CONTACT':
         let tempPayload = { ...payload }
         delete tempPayload.dob
         let dob = payload.dob.split('-').join('/')
         return [
            ...state,
            {
               ...tempPayload,
               dob: dob,
               favorite: false,
               id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
            },
         ]
      case 'TOGGLE_FAVORITE':
         let tempState = [...state]
         state.forEach((ele, idx) => {
            if (ele.id === payload) {
               tempState[idx].favorite = !state[idx].favorite
            }
         })
         return tempState
      default:
         return state
   }
}
