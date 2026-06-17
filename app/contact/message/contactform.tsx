"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number:"",
    email: "",
    message: "",
  });
  
  const [work, setWork] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWork(event.target.value);
  };

  return (
    <div className='flex justify-center bg-[hsla(0,1%,71%,0.929)]'>
      <div className='m-10 h-256 w-5xl border-2 bg-blue-200 '>
        <div className='flex justify-center text-3xl font-bold'>Contact us</div>
        <div className='pt-3 pl-4 text-lg '>Have a question or looking to schedule and appoitment?</div>
        <div className='pt-2 pl-4 text-lg'> Reach out to us and we will respond shortly!</div>
        <form className='m-4'>
          <div className='grid grid-cols-2 gap-2'>
            <div className=''>
              <label>First Name</label><br/>
              <input name='firstname' className='border rounded-sm h-12 w-72'/>
            </div>
            <div className=''>
              <label>Last Name</label><br/>
              <input name='lastname' className='border rounded-sm h-12 w-72'/>
            </div>
            <div className=''>
              <label>Phone Number</label><br/>
              <input name='phonenumber' className='border rounded-sm h-12 w-72'/>
            </div>
            <div className=''>
              <label>Email</label><br/>
              <input name='email' className='border rounded-sm h-12 w-72'/>
            </div>
          </div>
          <div className="h-35 w-150 border border-gray-300 mt-5 flex justify-center gap-4">
            <label>
              <input 
              type="radio"
              name="work"
              value="heating"
              checked={work === 'heating'}
              onChange={handleChange}
              />
              <span className="text-gray-700">Heating</span>
            </label>
            <label>
              <input 
              type="radio"
              name="work"
              value="cooling"
              checked={work === 'cooling'}
              onChange={handleChange}
              />
              <span className="text-gray-700">Cooling</span>
            </label>
            <label>
              <input 
              type="radio"
              name="work"
              value="electrical"
              checked={work === 'electrical'}
              onChange={handleChange}
              />
              <span className="text-gray-700">Electrical</span>
            </label>
            <label>
              <input 
              type="radio"
              name="work"
              value="indoor air quality"
              checked={work === 'indoor air quality'}
              onChange={handleChange}
              />
              <span className="text-gray-700">Indoor Air Quality</span>
            </label>
          </div>
          <div className="pt-5">
            <label>Message</label><br/>
            <textarea
              id ='message'
              value ={formData.message}
              rows={6}
              className="max-w-full min-h-[100px] p-3 border shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize"
            />
          </div>
        </form>
      </div>
    </div>
  );
}