"use client";
import React from 'react'
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function ContactForm() { 
  function SubmitButton(){
    const {pending} = useFormStatus();
    return(
      <button
      type='submit'
      disabled={pending}
      className='py-2 px-2 rounded-2xl bg-blue-500 hover:bg-blue-700 text-white disabled:bg-gray-40 disabled:cursor-not-allowed'
      >
        {pending ? "Sending message..." : "Send message"}
      </button>
    )
  }

  return (
    <div className='flex'>
      <div className='bg-gray-300 rounded-2xl border-1'>
        <form className='m-4'>
          <div className='mt-3 mb-3'>
            <label>Name</label>
            <input name = "name" placeholder=' John Smith' className='border-1 ml-2'/>
          </div>
          <div>
            <label>Email</label>
            <input name = "email" type = 'email' placeholder=' johnsmith@gmail.com' className='border-1 ml-2'/>
          </div>
          <div className='mb-3 mt-3'>
            <label>Message</label>
            <input name = "message" className="border-2 border-light-blue-500 ml-2" style={{ padding: '5px 1px 100px 10px' }}/>
          </div>
          <SubmitButton/>
        </form>
      </div>
    </div>
  )
}