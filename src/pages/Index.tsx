
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Server, Database, Users, Globe, CheckCheck, Microchip } from "lucide-react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Services data
  const services = [
    {
      title: "Premium Datasets",
      description: "Access highly accurate, comprehensive datasets tailored to your specific industry needs.",
      icon: <Database className="w-6 h-6" />,
      link: "/services#datasets"
    },
    {
      title: "Predictive Models",
      description: "Custom-built predictive models that generate actionable insights for your business.",
      icon: <CheckCheck className="w-6 h-6" />,
      link: "/services#models"
    },
    {
      title: "Expert Data Scientists",
      description: "Dedicated team of data scientists to analyze your data and build custom solutions.",
      icon: <Users className="w-6 h-6" />,
      link: "/services#team"
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud computing infrastructure for processing large volumes of data.",
      icon: <Server className="w-6 h-6" />,
      link: "/services#cloud"
    },
    {
      title: "Global Expansion",
      description: "Support for companies expanding their data operations globally with localized solutions.",
      icon: <Globe className="w-6 h-6" />,
      link: "/services#global"
    },
    {
      title: "Edge Computing",
      description: "Cutting-edge solutions for processing data closer to the source with minimal latency.",
      icon: <Microchip className="w-6 h-6" />,
      link: "/services#edge"
    }
  ];
  
  // Case studies data
  const caseStudies = [
    {
      title: "Reducing Equipment Failure by 87%",
      company: "Manufacturing",
      description: "We developed a predictive maintenance model that analyzed sensor data to predict equipment failures before they happened.",
      results: [
        "87% reduction in unplanned downtime",
        "Cost savings of $4.3 million annually",
        "25% increase in equipment lifespan"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Customer Behavior Prediction with 99.2% Accuracy",
      company: "Retail",
      description: "Our team created a comprehensive customer behavior model that predicted purchasing patterns with exceptional accuracy.",
      results: [
        "23% increase in conversion rates",
        "42% improvement in inventory management",
        "Reduced marketing costs by 31%"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];
  
  // Stats data
  const stats = [
    { label: "Data Accuracy", value: "99.9%" },
    { label: "Client Retention", value: "97%" },
    { label: "Projects Completed", value: "500+" },
    { label: "Data Scientists", value: "100+" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="bg-data-gray py-20" id="services">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                We provide comprehensive data solutions for businesses of all sizes,
                helping you transform raw data into actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-20 bg-white" id="case-studies">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Case Studies</h2>
              <p className="section-subtitle">
                Real-world examples of how our data solutions have transformed businesses and delivered exceptional results.
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <CaseStudy
                  key={index}
                  index={index}
                  title={study.title}
                  company={study.company}
                  description={study.description}
                  results={study.results}
                  image={study.image}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium border border-gray-300 transition-all duration-200 text-gray-700 hover:bg-gray-50 hover:border-data-blue hover:text-data-blue"
              >
                View All Case Studies
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="bg-data-blue text-white py-16">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "text-center transform transition-all duration-700",
                    isLoaded 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="bg-gradient-to-r from-data-navy to-data-blue rounded-2xl overflow-hidden shadow-xl">
              <div className="px-6 py-12 sm:px-12 sm:py-16 md:flex md:items-center md:justify-between">
                <div className="md:w-0 md:flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Ready to transform your data strategy?
                  </h2>
                  <p className="mt-3 max-w-3xl text-blue-100">
                    Get in touch with our team to discover how our data experts can help your business thrive.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-data-blue shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
