import React from 'react'
import CreateForm from './CreateForm'

export default function CreateTicket() {
  return (
    <div>
        <main>
          <h2 className='text-primary text-center text-[2rem]'>Add New Ticket</h2>
          <CreateForm/>
        </main>
    </div>
  )
}
