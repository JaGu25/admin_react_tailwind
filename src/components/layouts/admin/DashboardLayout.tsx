import React, { useState } from 'react'
import useKeypress from '../../../hooks/useKeypress';
import Header from './Header'
import Sidebar from './Sidebar'

const DashboardLayout:React.FC = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    useKeypress('Escape', () => {
        setIsOpen(false);
    });

    return (
        <div className="flex h-screen bg-gray-200 font-roboto">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-3 md:p-0">
                    <div className="container m-auto p-4 mt-10  bg-white  rounded-sm">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
