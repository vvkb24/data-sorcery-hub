
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const services = [
    { id: 'datasets', label: 'Datasets' },
    { id: 'models', label: 'Predictive Models' },
    { id: 'team', label: 'Data Science Team' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'edge', label: 'Edge Computing' }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const updatedServices = prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId];
      
      return { ...prev, services: updatedServices };
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        services: []
      });
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-data-blue focus:ring focus:ring-data-blue/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-data-blue focus:ring focus:ring-data-blue/20 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-data-blue focus:ring focus:ring-data-blue/20 transition-colors"
          placeholder="Your company name"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services you're interested in
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map(service => (
            <div key={service.id} className="flex items-center">
              <button
                type="button"
                onClick={() => handleServiceToggle(service.id)}
                className={cn(
                  "w-full px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  formData.services.includes(service.id)
                    ? "bg-data-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {service.label}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-data-blue focus:ring focus:ring-data-blue/20 transition-colors"
          placeholder="Tell us about your project and requirements"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full flex items-center justify-center rounded-md px-6 py-3",
          "text-base font-medium text-white bg-data-blue",
          "hover:bg-data-blue/90 transition-colors",
          "disabled:opacity-70 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
