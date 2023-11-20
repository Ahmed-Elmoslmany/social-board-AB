import React from 'react'

function Button({text,type = "button",onClick, className =''}) {
  return (
    <button key={text} className={className} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button