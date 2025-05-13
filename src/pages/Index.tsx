
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsShowcase from "@/components/BrandsShowcase";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <BrandsShowcase />
        <ProductShowcase />
        <TestimonialsCarousel />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Index;
