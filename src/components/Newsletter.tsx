
import { Button } from "@/components/ui/button";
import watch from "../assets/6426000_sd-removebg-preview 1.svg";
import SearchBar from "./SearchBar";
import { toast } from "sonner";
const Newsletter = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col bg-[#F5F5F5] rounded-[15px] p-10 md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-[Poppins] font-bold mb-4">Subscribe To Newsletter</h2>
            <p className="text-gray-500 font-[Poppins] mb-6">Get the latest news, special products and discounts</p>
            
            <div className="flex flex-col items-center sm:flex-row gap-3">
            <SearchBar  onSearch={() => {
              toast.success("Thank you for subscribing to our newsletter");
            }} />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="max-w-sm mx-auto">
              
                <img 
                  src={watch}
                  alt="Smartwatch Newsletter"
                  className="object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
