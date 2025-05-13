
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { initialProducts} from "./static"

const ProductCard = ({ product, onToggleFavorite }) => {
  return (
    <Card className="border-none text-center shadow-sm hover:shadow-md transition-all">
      <CardContent className="p-4 pb-0">
        <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className=" w-[400px] h-[300px] bg-gray-100 rounded-lg overflow-hidden mb-4"
            />
          <button 
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            onClick={() => onToggleFavorite(product.id)}
          >
            <Heart className={`w-4 h-4 ${product.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>
        <h3 className="font-bold font-[Poppins] text-lg">{product.name}</h3>
        <div className="flex text-center justify-center items-center my-1">
          {Array(5).fill(0).map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-black' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <p className="text-[#8B8E99]  text-[22px] font-[Poppins] line-through">${product.originalPrice.toFixed(2)}</p>
            )}
            <p className="font-bold text-[#1E1D1D] text-[24px]">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-3">
        <Button 
          variant="outline" 
          className="w-full border-black text-black hover:bg-black hover:text-white rounded-full"
          onClick={() => toast.success(`${product.name} added to cart`)}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProductShowcase = () => {
  const [products, setProducts] = useState(initialProducts);
  
  const handleToggleFavorite = (productId) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
    
    const product = products.find(p => p.id === productId);
    if (product) {
      if (!product.isFavorite) {
        toast.success(`${product.name} added to favorites`);
      } else {
        toast.info(`${product.name} removed from favorites`);
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <p className="text-[16px] font-[500] text-[#3858D6] font-[Poppins]">Find your favorite smart watch</p>
        </div>
        <h2 className="text-3xl font-bold font-[Poppins] text-[#1E1D1D] text-center mb-12">Our Latest Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onToggleFavorite={handleToggleFavorite} 
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-[#3858D6] hover:bg-blue-700 text-white font-[Poppins] rounded-full px-8">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
