import { Card, CardContent } from "@/components/ui/card";
import { brands } from "./static";

const BrandsShowcase = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card key={brand.name} className="bg-[#F6F6F6] border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className="w-17 h-17 mr-4 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#1E1D1D]  text-[24px]">{brand.name}</h3>
                  <p className="text-[#8B8E99] w-[100px] text-sm">{brand.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;
