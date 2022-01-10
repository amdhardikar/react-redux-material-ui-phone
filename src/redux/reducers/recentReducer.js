export const recentReducer = (state = [], { type, payload }) => {
   const maxLimit = 10
   switch (type) {
      case 'ADD_RECENT':
         let copyRecent = [...state]
         if (copyRecent.length === maxLimit) {
            copyRecent.pop()
         }
         copyRecent.unshift(payload)
         return copyRecent
      default:
         return state
   }
}
