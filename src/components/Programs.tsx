
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import ProgramCard from "./ProgramCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const programsData = [
  {
    id: 1,
    title: "Strength Training",
    description: "Build muscle, boost metabolism, and enhance overall fitness with our comprehensive strength training program.",
    imageSrc: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "12 Weeks",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Cardio Blast",
    description: "Improve heart health, stamina, and burn calories with high-energy cardio workouts designed for all fitness levels.",
    imageSrc: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    duration: "8 Weeks",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Yoga & Flexibility",
    description: "Enhance flexibility, balance, and mental clarity with our yoga program led by experienced instructors.",
    imageSrc: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "10 Weeks",
    level: "All Levels"
  },
  {
    id: 4,
    title: "High-Intensity Interval Training",
    description: "Maximize calorie burn and conditioning with alternating high-intensity exercise and recovery periods.",
    imageSrc: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "6 Weeks",
    level: "Advanced"
  },
  {
    id: 5,
    title: "Weight Loss Program",
    description: "Achieve sustainable weight loss through a balanced combination of exercise, nutrition guidance, and coaching.",
    imageSrc: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    duration: "12 Weeks",
    level: "All Levels"
  }
];

const Programs = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" 
        ? current.scrollLeft - current.offsetWidth 
        : current.scrollLeft + current.offsetWidth;
      
      current.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="programs" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
              Our <span className="text-fitness-red">Programs</span>
            </h2>
            <p className="text-fitness-darkGray mt-4 max-w-2xl">
              Discover our range of fitness programs designed to help you achieve your goals, whether you're just starting out or looking to advance your training.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {programsData.map((program) => (
            <div 
              key={program.id} 
              className="min-w-[300px] md:min-w-[350px] snap-start"
            >
              <ProgramCard {...program} />
            </div>
          ))}
        </div>
        
        <div className="md:hidden flex justify-center space-x-2 mt-6">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
