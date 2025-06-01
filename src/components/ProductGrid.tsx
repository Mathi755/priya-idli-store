
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Priya Classic 4-Plate Idli Cooker",
      price: "₹899",
      originalPrice: "₹1,199",
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Priya Deluxe 6-Plate Idli Maker",
      price: "₹1,299",
      originalPrice: "₹1,599",
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Priya Mini 2-Plate Idli Cooker",
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.3,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Compact"
    },
    {
      id: 4,
      name: "Priya Professional 8-Plate Cooker",
      price: "₹1,799",
      originalPrice: "₹2,199",
      rating: 4.8,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "New"
    },
    {
      id: 5,
      name: "Priya Steam Master 5-Plate",
      price: "₹1,099",
      originalPrice: "₹1,399",
      rating: 4.6,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Priya Family Pack 10-Plate",
      price: "₹2,199",
      originalPrice: "₹2,699",
      rating: 4.9,
      reviews: 423,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Family Size"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of premium idli cookers, crafted with precision and designed for perfect steaming every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
