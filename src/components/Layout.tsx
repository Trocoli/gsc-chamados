import React from "react";
import Title from "./Title";

interface LayoutProps {
    title: string 
    children: any
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={`flex flex-col w-2/3 bg-gray-100 text-gray-900 rounded-lg shadow-lg`}>
        <Title>{props.title}</Title>
        <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Layout;
