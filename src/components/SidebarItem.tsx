import Link from "next/link";

interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (e: any) => void;
}

const SidebarItem = (props: MenuItemProps) => {
  return (
    <div>
      {props.url && (
        <li className={` hover:bg-gray-800 text-white flex flex-col items-center justify-center h-20 w-[55px] cursor-pointer ${props.className}`}>
          <Link
            href={props.url!}
            className={`flex flex-col items-center justify-center h-15 w-15 ${props.className}`}
          >
            {props.icon}
            <span className="text-xs font-light ">{props.text}</span>
          </Link>
        </li>
      )}

      {!props.url && (
        <li
          className={` hover:bg-gray-800 text-white flex flex-col items-center justify-center h-20 w-[55px] cursor-pointer ${props.className}`}
          onClick={props.onClick}
        >
          {props.icon}
          <span className="text-xs font-light ">{props.text}</span>
        </li>
      )}
    </div>
  );
};

export default SidebarItem;
