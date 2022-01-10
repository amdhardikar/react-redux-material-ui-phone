export const filterReducer = (state = '', { type, payload }) => {
   switch (type) {
      case 'GET_FILTER_TERM':
         return payload
      default:
         return state
   }
}
