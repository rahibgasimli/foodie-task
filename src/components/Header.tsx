import chefLogo from "../assets/images/header/cheflogo.jpg"

import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

function Header() {

  const location = useLocation();
  const path = location.pathname;

  let headerContent;

  switch (true) {
    case path === "/orders":
      headerContent = (
        <h1 className="font-semibold text-2xl flex gap-2 items-center">
          <FiShoppingBag className="text-[var(--primary)]" />
          My Orders
        </h1>
      );
      break;
  
    case path.startsWith("/productdetail"):
      headerContent = (
        <div className="product-header flex w-full justify-between items-center px-4">
          <a href="#" className="font-semibold text-[var(--primary)]">{"<"} Pizza</a>
          <CiSearch className="text-[25px]"/>
        </div>
      );
      break;
  
    default:
      headerContent = (
        <>
          <div className="header-logo w-[50px] rounded-4xl">
            <img className="rounded-full" src={chefLogo} alt="" />
          </div>
          <h3 className="header-title font-medium">Good Chef</h3>
          <div className="header-icons flex gap-3 text-2xl">
            <CiSearch /> <IoIosNotificationsOutline />
          </div>
        </>
      );
      break;
  }


  return (
    <header>
        <div className="header flex justify-between items-center p-2 bg-(var[--background]) border-b-1 ">
          {headerContent}
        </div>
    </header>
  )
}

export default Header