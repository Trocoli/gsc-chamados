import React from 'react'

interface ButtonProps {
    
    color?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
    onClick? : () => void

}

const Button = (props: ButtonProps) => {
    const color = props.color ?? 'gray'
  return (
    <button onClick={props.onClick} className={`bg-gradient-to-r from-${color}-400 to-${color}-700 text-white px-4 py-4 rounded-md font-bold ${props.className}`} >
        {props.children}
    </button>
  )
}

export default Button