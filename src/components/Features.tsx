
import { Truck, Shield, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders above ₹500",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% authentic products with warranty",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "25+ years of manufacturing excellence",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Quick Support",
      description: "24/7 customer service available",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
