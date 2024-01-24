import React from 'react'

export default function FormInput({ type, placeholder, onChange }) {
  return (
    <div>
    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-500">
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border-none bg-transparent outline-none focus:outline-none"
    />
  </div>
    </div>
  )
}
