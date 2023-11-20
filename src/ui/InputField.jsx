import React from 'react'

function InputField({type="text", value, placeholder, onChange}) {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} className='px-4 py-2 rounded-md dark:bg-slate-700'/>
  )
}

export default InputField