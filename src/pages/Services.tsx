
import { useState } from 'react';
import { ArrowDown, Database, LineChart, Users, Cloud, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Services = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'datasets',
      title: 'Curated Datasets',
      description: 'Access high-quality, 99.9% accurate data collected through comprehensive surveys and rigorous validation.',
      longDescription: 'Our dataset services provide organizations with access to high-quality, rigorously validated data that's 99.9% accurate. We collect information through comprehensive surveys and multiple validation steps to ensure you have the most reliable foundation for your data science projects. Whether you need consumer behavior insights, market trends, or specialized industry data, our curated datasets save you time and resources while maximizing analytical accuracy.',
      icon: <Database className="w-6 h-6" />,
      features: [
        'Verified data accuracy of 99.9%',
        'Regular updates to maintain relevance',
        'Custom data collection services',
        'Comprehensive documentation and metadata',
        'Multiple export formats for seamless integration'
      ]
    },
    {
      id: 'models',
      title: 'Predictive Models',
      description: 'Leverage our pre-built machine learning models to predict trends and make data-driven decisions with confidence.',
      longDescription: 'Our predictive models help organizations anticipate trends and make data-driven decisions with unparalleled confidence. Built on our accurate datasets and refined through rigorous testing, these models deliver actionable insights that drive real business value. From demand forecasting to customer behavior prediction, our models are designed to solve specific business problems while maintaining the highest standards of accuracy and reliability.',
      icon: <LineChart className="w-6 h-6" />,
      features: [
        'Pre-trained on extensive, high-quality datasets',
        'Continuously improved algorithms',
        'Easy integration with your existing systems',
        'Customizable to your specific business needs',
        'Technical support and implementation guidance'
      ]
    },
    {
      id: 'team',
      title: 'Data Science Team',
      description: 'Work with our expert data scientists who can tailor custom solutions to your unique business challenges.',
      longDescription: 'Our team of expert data scientists brings decades of combined experience to your projects. When off-the-shelf solutions aren't enough, our specialists work closely with your organization to develop custom data solutions that address your unique challenges. From initial consultation through implementation and beyond, we partner with you to ensure your data initiatives deliver measurable value and competitive advantage.',
      icon: <Users className="w-6 h-6" />,
      features: [
        'PhD-level data scientists with industry experience',
        'Project-based or ongoing collaboration options',
        'End-to-end project management',
        'Knowledge transfer and team training',
        'Regular progress reports and transparent communication'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Computing',
      description: 'Utilize our powerful cloud infrastructure to process and analyze massive datasets efficiently.',
      longDescription: 'Our cloud computing services provide the infrastructure you need to process and analyze massive datasets with unprecedented efficiency. By leveraging our optimized, scalable cloud resources, you can dramatically reduce processing times and focus on extracting insights rather than managing infrastructure. Our platform integrates seamlessly with popular data science tools and frameworks, allowing your team to work with familiar technologies in a high-performance environment.',
      icon: <Cloud className="w-6 h-6" />,
      features: [
        'Scalable compute resources optimized for data science',
        'Secure data storage with robust encryption',
        'Pre-configured environments for popular frameworks',
        'Collaborative workspaces for team projects',
        'Usage-based pricing with no long-term commitments'
      ]
    },
    {
      id: 'edge',
      title: 'Edge Computing',
      description: 'Deploy machine learning models at the edge for real-time processing and reduced latency.',
      longDescription: 'Our cutting-edge computing solutions bring machine learning capabilities directly to your data sources, enabling real-time processing with minimal latency. This approach is ideal for applications where immediate insights are critical, such as IoT deployments, autonomous systems, and time-sensitive analytics. Our edge computing platform optimizes model performance for resource-constrained environments while maintaining security and reliability.',
      icon: <Cpu className="w-6 h-6" />,
      features: [
        'Model optimization for resource-constrained devices',
        'Secure deployment pipelines',
        'Remote monitoring and management',
        'Offline processing capabilities',
        'Seamless integration with cloud infrastructure'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-data-light py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Transforming raw data into actionable insights through our comprehensive suite of data science services
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => scrollToSection('service-list')}
                className="group"
              >
                Explore Our Services
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section id="service-list" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how our services can help you harness the power of data to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={`#${service.id}`}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Detailed Service Sections */}
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className={cn(
              "py-20 scroll-mt-20",
              service.id === 'datasets' || service.id === 'team' || service.id === 'edge' 
                ? "bg-data-light" 
                : "bg-white"
            )}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2">
                  <div className={cn(
                    "w-16 h-16 flex items-center justify-center rounded-xl mb-6",
                    "bg-data-blue/10 text-data-blue"
                  )}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.longDescription}</p>
                  <Button className="mb-8">
                    Get Started with {service.title}
                  </Button>
                </div>
                
                <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-data-blue/10 flex items-center justify-center mr-3">
                          <div className="h-2 w-2 rounded-full bg-data-blue"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* CTA Section */}
        <section className="bg-data-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Strategy?</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Contact our team of experts today to discuss how our services can help you achieve your business goals
            </p>
            <Button className="bg-white text-data-navy hover:bg-white/90">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
