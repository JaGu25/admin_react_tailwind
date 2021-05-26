


import React from 'react'

type buttonType = 'submit' | 'button'

interface IButtonProps {
  type?: buttonType
  text: string,
  isDisabled?: boolean
  handleClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
    type = 'button',
    text,
    handleClick,
    isDisabled
}) => {
    return (
        <button
            type={type}
            className="btn"
            >
            {text}
        </button>
    )
}

export default Button
