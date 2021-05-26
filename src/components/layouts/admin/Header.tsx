import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../store/auth/authContext'

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Header:React.FC<Props> = ({  isOpen, setIsOpen }) => {

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const { logOut } = useContext(AuthContext)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const handleLogout = () => {
       logOut()
    }

    return (
        <header
            className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-gray-400"
        >
            <div className="flex items-center">
                <button
                    className="text-gray-500 focus:outline-none lg:hidden"
                    onClick={handleClick}
                >
                    <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            stroke="currentColor"
                        />
                    </svg>
                </button>
                <div className="relative mx-4 lg:mx-0">
                    Administrador
                </div>
            </div>

            <div className="flex items-center">

                <div className="relative">
                    <button
                        className="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none cursor-pointer"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <img
                            className="h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                            alt="Your avatar"
                        />
                    </button>
                    {
                        dropdownOpen ? <div
                            onClick={() => setDropdownOpen(false)}
                            className="fixed inset-0 h-full w-full z-10"
                        ></div> : null
                    }
                    {
                        dropdownOpen ? <div
                            className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
                        >
                            <button
                                onClick={handleLogout}
                                className="block text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white cursor-pointer focus:outline-none"
                            >Cerrar Sesión</button>
                        </div> : null
                    }
                </div >
            </div >
        </header >
    )
}

export default Header
