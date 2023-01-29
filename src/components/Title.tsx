import React from "react";

const Title = (props: any) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-2xl">{props.children}</h1><hr className="border-2 border-red-500"/> 
    </div>
  );
};

export default Title;
