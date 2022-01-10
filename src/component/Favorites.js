import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function Favorites() {
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
            if (contact.favorite === true) {
               return <ContactCard contact={contact} key={index} />
            }
            return <div key={index}></div>
         })}
      </div>
   )
}

export default Favorites
