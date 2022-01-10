import { combineReducers } from 'redux'
import { contactReducer } from './contactReducer'
import { filterReducer } from './filterReducer'
import { newContactReducer } from './newContactReducer'
import { recentReducer } from './recentReducer'

export const reducers = combineReducers({
   contacts: contactReducer,
   newContact: newContactReducer,
   recentContact: recentReducer,
   filters: filterReducer
})
