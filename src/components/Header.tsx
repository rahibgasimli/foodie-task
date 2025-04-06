import chefLogo from "../assets/images/header/cheflogo.jpg"

import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header>
        <div className="header flex justify-between items-center p-2 bg-(var[--background]) border-b-1 ">
            <div className="header-logo w-[50px] rounded-4xl"><img className=" rounded-full" src={chefLogo} alt="" /></div>
            <h3 className="header-title font-medium">Good Chef</h3>
            <div className="header-icons flex gap-3 text-2xl"><CiSearch/> <IoIosNotificationsOutline/></div>
        </div>
    </header>
  )
}

export default Header