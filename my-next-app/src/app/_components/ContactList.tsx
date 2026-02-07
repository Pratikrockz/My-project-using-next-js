import { ContactType } from '@/_types/contact'
import Link from 'next/link'
import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { DeleteButton } from './DeleteButton'
import { deleteContactAction } from '../actions/contact'

export const ContactList = ({contacts}:{contacts:ContactType[]}) => {
    console.log("contacts", contacts)
  return (
    <div className='space-y-4'>
        {contacts.map((contact)=>(
            <div key={contact.id} className='p-4 border rounded-lg'>
            <div className='flex justify-between items-start'>
                <div>
                    <h2 className='text-lg font-semibold'>{contact.name}</h2>
                    <p className='text-gray-600'>{contact.email}</p>
                </div>
                <div className='flex items-center self-center gap-3'>
                    <Link href={`/contact/edit/${contact.id}`} className='flex items-center gap-1 text-sm font-medium border border-blue-300 rounded-md px-3 py-1 hover:bg-blue-100 transition-colors'>
                    <FiEdit className='text-blue-600' />
                    Edit
                    </Link>
                    <DeleteButton action={deleteContactAction} contact={contact} />
                </div>
            </div>
            </div>
        ))}     
    </div>
  )
}
