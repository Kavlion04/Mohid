import { useState } from "react";
import { Menu, User, X, Search, ShoppingCart } from "lucide-react";
import logo from "../assets/Logo (2).svg";
import { navigationLinks } from "./static";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-black sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <img className="cursor-pointer" src={logo} alt="logo" />
        </div>

        <div className="hidden md:flex space-x-10">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-white hover:text-fitness-red"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className=" space-x-4 items-center justify-center  hidden md:flex">
          <Search className="text-white cursor-pointer" size={24} />
          <User className="text-white cursor-pointer" size={24} />
          <ShoppingCart className="text-white cursor-pointer" size={24} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-3">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-white hover:text-fitness-red"
            >
              {link.label}
            </a>
          ))}
          <div className="flex space-x-4">
            <Search className="text-white" size={24} />
            <User className="text-white" size={24} />
            <ShoppingCart className="text-white" size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
