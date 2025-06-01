
import { Award, Users, Factory, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Maruti Enterprises</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 25 years, Maruti Enterprises has been at the forefront of kitchen appliance manufacturing, 
                specializing in premium idli cookers under the trusted Priya brand name.
              </p>
              <p className="text-lg text-gray-600">
                We combine traditional cooking wisdom with modern manufacturing techniques to create products 
                that deliver consistent, perfect results every time. Our commitment to quality and customer 
                satisfaction has made us a household name across India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Factory className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Product Models</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Globe className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">Pan India</div>
                <div className="text-sm text-gray-600">Distribution</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl transform -rotate-6 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Manufacturing Excellence" 
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
