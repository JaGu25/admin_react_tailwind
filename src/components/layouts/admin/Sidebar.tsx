import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Sidebar:React.FC<Props> = ({ isOpen, setIsOpen }) => {

    return (
        <div className="flex">

            <div

                className={`${isOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}
                onClick={() => setIsOpen(false)}

            ></div>

            <div
                className={`${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}

            >
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        <img src="" alt="Logo" className="w-40" />
                    </div>
                </div>

                <nav className="mt-10">
                    <NavLink
                        activeClassName="active-className"
                        className="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
                        to={"/admin"}

                    >
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
                                fill="currentColor"
                            />
                            <path
                                d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
                                fill="currentColor"
                            />
                            <path
                                d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
                                fill="currentColor"
                            />
                        </svg>

                        <span className="mx-4">Dashboard</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
