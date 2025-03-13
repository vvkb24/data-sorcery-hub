
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
      
      {/* Animated gradient blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-data-blue/10 rounded-full blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-data-teal/10 rounded-full blur-3xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transform transition-all duration-1000 ease-out",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-data-blue/10 text-data-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-data-blue mr-2"></span>
              Leading Data Science Solutions
            </div>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6">
              Transforming <span className="text-data-blue">Data</span> Into Decisive Insights
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
              We deliver cutting-edge predictive models, comprehensive datasets, and expert data science services with unparalleled 99.9% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium shadow-sm transition-all duration-200 text-white bg-data-blue hover:bg-data-blue/90 hover:translate-y-[-2px]"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium border border-gray-300 transition-all duration-200 text-gray-700 hover:bg-gray-50 hover:translate-y-[-2px]"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              <div className="text-center p-3">
                <p className="text-2xl sm:text-3xl font-bold text-data-blue">99.9%</p>
                <p className="text-sm text-gray-600">Data Accuracy</p>
              </div>
              <div className="text-center p-3">
                <p className="text-2xl sm:text-3xl font-bold text-data-blue">500+</p>
                <p className="text-sm text-gray-600">Data Models</p>
              </div>
              <div className="text-center p-3 col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-bold text-data-blue">100+</p>
                <p className="text-sm text-gray-600">Experts</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "relative transform transition-all duration-1000 ease-out delay-300",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main visualization */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden p-6 rotate-3 transform transition-transform duration-500 hover:rotate-1">
                <div className="h-full w-full bg-gradient-to-br from-data-light to-white rounded-xl p-4 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-24 h-3 bg-gray-200 rounded-full"></div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    <div className="col-span-2 bg-gradient-to-r from-data-blue/10 to-data-teal/10 rounded-lg h-24"></div>
                    <div className="bg-gray-100 rounded-lg h-20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-data-blue/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-data-blue"></div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-20 flex items-end p-3">
                      <div className="w-full flex items-end space-x-1">
                        <div className="w-1/5 h-6 bg-data-teal/40 rounded-sm"></div>
                        <div className="w-1/5 h-8 bg-data-teal/60 rounded-sm"></div>
                        <div className="w-1/5 h-12 bg-data-teal/80 rounded-sm"></div>
                        <div className="w-1/5 h-4 bg-data-teal/40 rounded-sm"></div>
                        <div className="w-1/5 h-10 bg-data-teal/60 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="col-span-2 bg-gray-100 rounded-lg h-16 flex items-center justify-around">
                      <div className="w-24 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-20 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating element 1 */}
              <div className="absolute top-[10%] -left-6 w-24 h-24 bg-white rounded-lg shadow-lg p-2">
                <div className="w-full h-full bg-data-blue/10 rounded flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-data-blue flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V18M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating element 2 */}
              <div className="absolute -bottom-4 right-12 w-32 h-20 bg-white rounded-lg shadow-lg p-2 rotate-12">
                <div className="w-full h-full bg-data-teal/10 rounded flex items-center justify-center">
                  <div className="space-y-2 w-full px-3">
                    <div className="w-full h-1.5 bg-data-teal/40 rounded-full"></div>
                    <div className="w-2/3 h-1.5 bg-data-teal/60 rounded-full"></div>
                    <div className="w-1/2 h-1.5 bg-data-teal/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-500 mb-2">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4V20M8 20L13 15M8 20L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
