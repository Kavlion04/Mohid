import SearchBar from "./SearchBar";
import { toast } from "sonner";
import watch from "../assets/17b2724d5bd682148b44a88441cad7bfa9fe6730_original-removebg-preview 1.svg";
const Hero = () => {
  const handleSearch = (query: string) => {
    toast.info(`Searching for: ${query}`);
  };

  return (
    <section id="home" className="relative">
      <div className="bg-black text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-28">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Poppins] mb-6">
                Discover<br />
                Most Suitable<br />
                Watches
              </h1>
              <p className="text-[#8B8E99] font-[Poppins] text-lg mb-8 max-w-lg">
                Find the best, reliable, and cheap smart watches here.
                We focus on product quality. Here you can find smart
                watches of almost all brands. So why you are waiting?
                Just order now!
              </p>
              <div className="max-w-md w-full mb-6">
                <SearchBar onSearch={handleSearch} />
              </div>
              
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-full overflow-hidden">
                  
                    <img 
                      src={watch}
                      alt="Smartwatch"
                      className="object-cover w-[400px] h-[400px]"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
