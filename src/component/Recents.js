import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function Recents() {
   const allRecent = useSelector((state) => state.recentContact)
   const filters = useSelector((state) => state.filters)
   const [contactsList, setContactList] = useState(allRecent)

   useEffect(() => {
      if (filters !== '') {
         const renderedEle = allRecent.filter((ele) => {
            const nameString = ele.fname.concat('', ele.lname)
            return nameString.toLowerCase().includes(filters.toLowerCase())
         })
         setContactList(renderedEle)
      } else {
         setContactList(allRecent)
      }
   }, [filters, allRecent])

   return (
      <div>
         {contactsList.map((contact, index) => {
            return (
               <ContactCard
                  contact={contact}
                  timestamp={contact.timestamp}
                  key={index}
               />
            )
         })}
      </div>
   )
}

export default Recents
