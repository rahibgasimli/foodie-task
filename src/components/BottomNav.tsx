import { GoHomeFill } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottom-nav flex justify-between bg-[var(--background)] p-4 px-12 fixed bottom-0 left-0 right-0 md:hidden ">
      <Link to="/"><div className="home-nav flex flex-col items-center justify-center hover:text-[var(--primary)] cursor-pointer"><GoHomeFill className="text-3xl "/> <h6 className="text-[10px] mt-0.5">Home</h6></div></Link>
      <Link to="/orders"><div className="orders-nav flex flex-col items-center justify-center hover:text-[var(--primary)] cursor-pointer"><FiShoppingBag className="text-3xl"/> <h6 className="text-[10px] mt-0.5">My Orders</h6></div></Link>
      <Link to="/categories"><div className="profile-nav flex flex-col items-center justify-center hover:text-[var(--primary)] cursor-pointer"><BiCategory className="text-3xl"/> <h6 className="text-[10px] mt-0.5">Categories</h6></div></Link>
    </nav>
  )
}

export default BottomNav