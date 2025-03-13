
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Database, CheckCheck, Users, Server, Globe, Microchip } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const [activeSection, setActiveSection] = useState("datasets");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Handle hash in URL for direct navigation
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Set up scroll spy
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = "";
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 200;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || "";
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);
  
  const services = [
    {
      id: "datasets",
      title: "Premium Datasets",
      icon: <Database className="w-10 h-10" />,
      description: "Access our highly accurate, comprehensive datasets carefully curated for various industries. All our datasets undergo rigorous verification processes to ensure 99.9% accuracy.",
      features: [
        "Industry-specific data collections",
        "Historical and real-time data",
        "Pre-processed and cleaned datasets",
        "Custom data collection through surveys",
        "Regular updates and maintenance"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: "models",
      title: "Predictive Models",
      icon: <CheckCheck className="w-10 h-10" />,
      description: "Our custom predictive models are designed to generate actionable insights for your business. We build, train, and deploy models that can help you make data-driven decisions.",
      features: [
        "Custom model development",
        "Anomaly detection systems",
        "Forecasting and trend analysis",
        "Customer behavior prediction",
        "Risk assessment models"
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      id: "team",
      title: "Expert Data Scientists",
      icon: <Users className="w-10 h-10" />,
      description: "Work with our dedicated team of 100+ data scientists who specialize in various domains. Our experts can analyze your data, build custom solutions, and help you implement data-driven strategies.",
      features: [
        "Dedicated project teams",
        "Domain specialists",
        "Regular progress reporting",
        "Knowledge transfer sessions",
        "Ongoing support and maintenance"
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      icon: <Server className="w-10 h-10" />,
      description: "Leverage our scalable cloud computing infrastructure to process large volumes of data efficiently. Our cloud solutions provide the computational power you need for complex data operations.",
      features: [
        "Scalable storage solutions",
        "High-performance computing",
        "Secure data environments",
        "Automated backup systems",
        "Distributed processing frameworks"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: "global",
      title: "Global Expansion",
      icon: <Globe className="w-10 h-10" />,
      description: "Support for companies expanding their data operations globally with localized solutions. We help you navigate the complexities of international data regulations and cultural differences.",
      features: [
        "Localized data collection",
        "Compliance with regional regulations",
        "Multi-language support",
        "Cultural insights integration",
        "Global data strategy planning"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: "edge",
      title: "Edge Computing",
      icon: <Microchip className="w-10 h-10" />,
      description: "Our cutting-edge solutions enable processing data closer to the source with minimal latency. Perfect for IoT applications and real-time analytics in remote or bandwidth-constrained environments.",
      features: [
        "Low-latency processing",
        "Reduced bandwidth usage",
        "IoT device integration",
        "Real-time analytics",
        "Autonomous operation capabilities"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-data-navy text-white py-20 md:py-28">
          <div className="section-container text-center">
            <div
              className={cn(
                "max-w-3xl mx-auto transition-all duration-1000",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Comprehensive data solutions powered by cutting-edge technology and expert analysis
              </p>
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        <div className="sticky top-16 z-20 bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <nav className="flex space-x-8 py-4">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md whitespace-nowrap transition-colors",
                      activeSection === service.id
                        ? "bg-data-blue/10 text-data-blue"
                        : "text-gray-600 hover:text-data-blue hover:bg-data-blue/5"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(service.id);
                      document.getElementById(service.id)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    <span className="hidden sm:block">{service.icon}</span>
                    <span className="text-sm font-medium">{service.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Service Details */}
        <div className="bg-data-gray py-16">
          <div className="section-container space-y-32">
            {services.map((service, index) => (
              <section 
                key={service.id} 
                id={service.id}
                className={cn(
                  "scroll-mt-32 transition-all duration-1000",
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  index % 2 === 0 ? "lg:grid-flow-col" : "lg:grid-flow-col-dense"
                )}>
                  <div className={index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 rounded-xl bg-data-blue/10 text-data-blue flex items-center justify-center">
                            {service.icon}
                          </div>
                          <h2 className="text-3xl font-bold">{service.title}</h2>
                        </div>
                        
                        <p className="text-gray-600 mb-8">{service.description}</p>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Key Features:</h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-data-blue/10 text-data-blue flex items-center justify-center">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-10">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium shadow-sm transition-all duration-200 text-white bg-data-blue hover:bg-data-blue/90 hover:translate-y-[-2px]"
                          >
                            Get Started with {service.title}
                          </Link>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-data-blue/5 rounded-bl-full"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-data-teal/5 rounded-tr-full"></div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-100">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <section className="bg-white py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Strategy?</h2>
              <p className="text-xl text-gray-600 mb-10">
                Contact us today to discuss how our experts can help you unlock the full potential of your data.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md px-6 py-4 text-lg font-medium shadow-lg transition-all duration-200 text-white bg-data-blue hover:bg-data-blue/90 hover:translate-y-[-2px]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
