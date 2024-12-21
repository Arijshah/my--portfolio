import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
      <div className='space-y-8'>
         <h2 className='text-4xl'> Get In Touch</h2>
         <p className='text-gray-900 text-[25px] pt-2'>
            For more details, please contact us 
         </p>
         <div className='flex-gap-3 items-center'>
          <MdAttachEmail  size={30}/> xyz@gmail.com

         </div>
         <div className='flex-gap-3 items-center'>
          <BsTelephoneOutboundFill size={30}/> 111-222-444
         </div>
        </div>
        <div className='space-y-8'></div>
        <div className='flex flex-col gap-1'>
            <label htmlFor='name'> Name </label>
            <input type= 'text'
            className='h-[40px] bg-gray-400 border border-accent'
            id ='name'></input> 
        </div>

        <div className='flex flex-col gap-1'>
            <label htmlFor='email'> Email </label>
            <input type= 'text'
            className='h-[40px] bg-gray-400 border border-accent'
            id ='email'></input> 
        </div>

        <div className='flex flex-col gap-1'>
            <label htmlFor='msg'> Message </label>
            <textarea
            className=' bg-gray-400 border border-accent'
            id ='msg' rows={6}></textarea> 
        </div>
       <button className='bg-slate-200 border border-accent'>Send

       </button>
   
      </div>
   
  </div>
     
  )
}

export default Contact
