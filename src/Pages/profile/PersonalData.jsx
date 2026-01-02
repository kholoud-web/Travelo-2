// ProfilePage.jsx
import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiCalendar, FiUser } from 'react-icons/fi';
import { MdOutlineWc } from 'react-icons/md';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useState } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


  
const PersonalData = () => {
  const [value, setValue] = useState()
const [date, setDate] = useState(new Date("1997-06-17"));
  return (
    <>
      {/* Header */}
       <div className="h-full pb-6 ">
      <div className="flex  items-center p-7 justify-between mb-8 bg-white rounded-2xl ">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
            <p className="text-sm text-gray-500 mt-1">
              Real-time information and activities of your prototype.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <FaCamera size={18} />
          Edit
        </button>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-7 rounded-2xl ">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              defaultValue="Emmily"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              defaultValue="Morgan"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              defaultValue="em***an@gmail.com"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>
        </div>

        {/* Phone Number */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative flex items-center pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none">
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="EG"
            />
          </div>
        </div>

        <div className='flex justify-between'>
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="relative">
              <MdOutlineWc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select className="w-[200px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Birthday */}


    <div className="w-[200px] relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">Birthday</label>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
        dateFormat="MM/dd/yyyy"
      />
      <FiCalendar className="absolute left-3 bottom-1/5 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
        </div>
        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <div className="relative">
            <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg  appearance-none">
              <option value="">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              defaultValue="123 Main Street, Spring"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
          <input
            type="text"
            defaultValue="90210"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
          />
        </div>
        <div></div>
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-12 py-2 border border-gray-500 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Discard
          </button>
          <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            Save changes
          </button>
        </div>
      </form>
</div>
    </>
  );
};

export default PersonalData;