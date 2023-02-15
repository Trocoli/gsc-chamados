import { useAuth } from '@/hooks/useAuth';
import React from 'react'
import { HomeIcon, ListIcon, LogoutIcon } from './Icons/index';
import SidebarItem from './SidebarItem';
import Link from 'next/link';


const Sidebar = () => {
    
  const {logout} = useAuth()
  return (
    <aside className='flex flex-col bg-gradient-to-r from from-red-700 to-red-500'>
        <div className='flex-grow'>
            <ul>
                <SidebarItem text='Abertos' url='/admin' icon={HomeIcon}/>
                <SidebarItem text='Todos' url='/todos' icon={ListIcon}/>
            </ul>
        </div>
            <ul className=''>
                <SidebarItem text='Logout' icon={LogoutIcon} onClick={logout}/>
            </ul>
    </aside>
    )
}

export default Sidebar