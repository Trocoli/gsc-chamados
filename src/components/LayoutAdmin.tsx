import React from 'react'
import Sidebar from './Sidebar';
import Title from './Title';

interface LayoutAdminProps { 
    title: string
    children: any
}

const LayoutAdmin = (props: any) => {
  return (
    <div className={`flex flex-col w-2/3 bg-gray-100 text-gray-900 rounded-lg`}>
    <Sidebar />
    <Title>{props.title}</Title>
    <div className="p-4">{props.children}</div>
</div>
  )
}

export default LayoutAdmin