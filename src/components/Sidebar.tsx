import React from 'react'
import { HomeIcon, ListIcon, LogoutIcon } from './Icons/index';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <aside className='flex flex-col bg-gradient-to-r from from-red-700 to-red-500'>
        <div className='flex-grow'>
            <ul>
                <SidebarItem text='Home' icon={HomeIcon}/>
                <SidebarItem text='Lista' icon={ListIcon}/>
            </ul>
        </div>
            <ul className=''>
                <SidebarItem text='Logout' icon={LogoutIcon} />
            </ul>
    </aside>
    )
}

export default Sidebar