import React from 'react'
import PropTypes from "prop-types"

const Button = ({children,size,color,func}) => {
  return (
    <button data-testid="test-button" className={`${size} ${color}`} onClick={func}>
        {children}
    </button>
  )
}

export default Button

Button.propTypes={
    children:PropTypes.string.isRequired,
    size:PropTypes.number.isRequired,
    color:PropTypes.string.isRequired
}