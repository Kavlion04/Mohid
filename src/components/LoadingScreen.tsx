import { useEffect, useState } from "react";
import logo from "../assets/Logo (2).svg";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + Math.random() * 15, 100));
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [progress]);
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-64 flex flex-col items-center">
        <img className="w-20 h-20 mb-4" src={logo} alt="logo" />
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-white mt-4">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
