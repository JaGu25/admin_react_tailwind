import React from 'react'

type buttonType = 'submit' | 'button'

interface IButtonProps {
  type?: buttonType
  text: string
  isDisabled?: boolean
  handleClick?: () => void
  isLoading: boolean
}

const Button: React.FC<IButtonProps> = ({
    type = 'button',
    text,
    handleClick,
    isDisabled,
    isLoading = 'false'
}) => {
    return (
        <button
            type={type}
            className="btn"
            disabled={isDisabled}
            >
            {text}
            {
                isLoading && (<i className="fas fa-spinner fa-spin ml-2"></i>)
            }
        </button>
    )
}

export default Button
