
import React from 'react'

type inputType = 'text' | 'password' | 'email' | 'number'

interface ITextFieldProps {
  type?: inputType
  id: string,
  label: string
  name: string
  errorMessage?: string
  isDisabled?: boolean
  value: string
  register: any
}

export const TextField: React.FC<ITextFieldProps> = ({
    type = 'text',
    id,
    label,
    name,
    errorMessage,
    isDisabled = false,
    value,
    register
}) => {

    const hasError: boolean = errorMessage !== undefined;

    return (
        <div className="form my-2">
            <label className="text-gray-700 text-sm" htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                disabled={isDisabled}
                {...register(name)}
                className={`input-form ${hasError && ('invalid')}`}
                value={value}
            />
            <span className="text-red-500">{errorMessage}</span>
        </div>
    )
}
