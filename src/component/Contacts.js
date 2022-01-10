import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
import { useSelector } from 'react-redux'

function Contacts() {
   const allContact = useSelector((state) => state.contacts)
   const filters = useSelector((state) => state.filters)
   const [contactsList, setContactList] = useState(allContact)

   useEffect(() => {
      if (filters !== '') {
         const renderedEle = allContact.filter((ele) => {
            const nameString = ele.fname.concat('', ele.lname)
            return nameString.toLowerCase().includes(filters.toLowerCase())
         })
         setContactList(renderedEle)
      } else {
         setContactList(allContact)
      }
   }, [filters, allContact])

   return (
      <div>
         {contactsList.map((contact, index) => {
            return (
               <ContactCard
                  contact={contact}
                  key={index}
               />
            )
         })}
      </div>
   )
}

export default Contacts
