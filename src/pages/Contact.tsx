
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { AtSign, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-data-blue text-white py-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our data experts can transform your business with actionable insights.
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-data-blue/10 flex items-center justify-center text-data-blue flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Our Location</h3>
                    <p className="text-gray-600 mt-1">
                      100 Data Avenue, Tech District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-data-blue/10 flex items-center justify-center text-data-blue flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      +1 (555) 123-4567<br />
                      Mon-Fri, 9AM-6PM PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-data-blue/10 flex items-center justify-center text-data-blue flex-shrink-0">
                    <AtSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      info@dataexperts.com<br />
                      support@dataexperts.com
                    </p>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div className="mt-8 p-6 rounded-lg bg-gray-50 border border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">Office Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-data-gray py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Visit Our Office</h2>
              <p className="section-subtitle">
                Located in the heart of San Francisco's tech district, our office is easily accessible and designed for collaboration.
              </p>
            </div>
            
            <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
              {/* This is a placeholder for a real map - in a real application, you would integrate Google Maps or similar */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                  Map placeholder - In a production environment, this would be an interactive map showing our location at 100 Data Avenue, Tech District, San Francisco.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
