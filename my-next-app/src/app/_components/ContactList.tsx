import { ContactType } from '@/_types/contact'
import React from 'react'

export const ContactList = ({contacts}:{contacts:ContactType[]}) => {
  return (
    <div className='space-y-4'>
        {contacts.map((contact)=>(
            <div key={contact.id} className='p-4 border rounded-lg'>
            <div className='flex justify-between items-start'>
                <div>
                    <h2 className='text-lg font-semibold'>{contact.name}</h2>
                    <p className='text-gray-600'>{contact.email}</p>
                </div>
            </div>
            </div>
        ))}     
    </div>
  )
}
