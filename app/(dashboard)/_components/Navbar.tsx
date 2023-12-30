import { NavbarRoutes } from "@/components/NavbarRoutes";
import { MobileSidebar } from "./MobileSidebar";

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center justify-between bg-white shadow-sm'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
