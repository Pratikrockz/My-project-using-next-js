"use client"

import { ContactType } from '@/_types/contact'
import React, { useActionState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'
type DeleteButtonProps = {
    action:(prevState:any, formData:FormData)=>Promise<any>
    contact?:ContactType
}
export const DeleteButton = ({action, contact}: DeleteButtonProps) => {
    const [state,formAction]=useActionState(action,null)
  return (
    <div>
        <form action={formAction} method='post'>
            <input type='hidden' name='id' value={contact?.id} />
            <button type='submit' className='flex items-center gap-1 text-sm font-medium border border-red-300 rounded-md px-3 py-1 hover:bg-red-100 transition-colors'
            onClick={(e)=>{
                if(!confirm('Are you sure you want to delete this contact?')){
                    e.preventDefault()
                }
            }}>

                <FiTrash2 className='text-red-600 text-lg' /> Delete
            </button>
        </form>
    </div>
  )
}
