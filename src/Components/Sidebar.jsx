import React from 'react'
import './Sidebar.css'
import DropdownMenu from './DropdownMenu'

const Sidebar = () => {
    return (
        <div>
            <div className='main'>
                <div className='inner'>
                    <div className='logo'>
                        JB <br /> Industries
                    </div>
                </div>


                <div className='setting'>
                    <DropdownMenu className='dropdown'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar