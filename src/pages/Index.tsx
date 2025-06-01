
import { ShoppingCart, Phone, Mail, MapPin, Star, Truck, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <About />
      <Contact />
      
      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Customers</h3>
                <p className="text-gray-600 mb-6">Browse and purchase our premium idli cookers</p>
                <Button 
                  className="w-full" 
                  onClick={() => window.location.href = '/customer-auth'}
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Admin Access</h3>
                <p className="text-gray-600 mb-6">Manage products and inventory</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = '/admin-auth'}
                >
                  Admin Login
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
