import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "./static";


const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (
    event: React.SyntheticEvent<HTMLDivElement, Event>
  ) => {};

  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say About Us
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="bg-[#F5F5F5] border-none shadow-md rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-[200px] h-[200px] mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-[200px] h-[200px] rounded-[15px]"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>

                        <p className="text-[#8B8E99] font-[Poppins] text-[16px] w-[200px] font-medium ">{testimonial.text}</p>
                        <div className="flex mb-4">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${
                                  i < testimonial.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                    index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
          <div className="hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
