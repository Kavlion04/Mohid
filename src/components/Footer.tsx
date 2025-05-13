
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white  ">
      <div className="container mx-auto">
        
        
        <div className="border-t border-white/10 pb-3  pt-3 text-center">
          <p className="text-white text-sm text-center mr">
            © {new Date().getFullYear()} Mohid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
