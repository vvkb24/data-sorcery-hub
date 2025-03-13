
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudy from '@/components/CaseStudy';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const [filter, setFilter] = useState('all');
  
  const caseStudies = [
    {
      title: 'Predictive Maintenance for Manufacturing',
      company: 'Industrial Systems Inc.',
      description: 'Implemented an IoT-based predictive maintenance system that reduced equipment downtime by 35% and maintenance costs by 25%.',
      results: [
        'Reduced unplanned downtime by 35%',
        'Decreased maintenance costs by 25%',
        'Extended equipment lifespan by 20%',
        'ROI achieved within 8 months'
      ],
      image: 'https://images.unsplash.com/photo-1531758126412-d51bfb86cv87?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200',
      categories: ['predictive-models', 'edge']
    },
    {
      title: 'Customer Behavior Analysis for Retail',
      company: 'GlobalMart',
      description: 'Developed a comprehensive customer segmentation and behavior analysis system that increased targeted campaign conversion by 42%.',
      results: [
        'Increased marketing ROI by 58%',
        'Improved customer retention by 23%',
        '42% higher conversion on targeted campaigns',
        'Enhanced inventory management accuracy by 31%'
      ],
      image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200',
      categories: ['datasets', 'models']
    },
    {
      title: 'Real-time Fraud Detection System',
      company: 'SecureFinance',
      description: 'Built an advanced fraud detection system that processes transactions in real-time, reducing fraud losses by 78% while maintaining a low false positive rate.',
      results: [
        'Reduced fraud losses by 78%',
        'Maintained false positive rate below 0.5%',
        'Processing time under 50ms per transaction',
        'Scaled to handle 10,000+ transactions per second'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200',
      categories: ['models', 'cloud']
    },
    {
      title: 'Supply Chain Optimization',
      company: 'LogisticsPro',
      description: 'Implemented an end-to-end supply chain optimization solution that reduced inventory costs by 18% while improving product availability.',
      results: [
        'Reduced inventory holding costs by 18%',
        'Improved product availability by 15%',
        'Decreased transportation costs by 12%',
        'Enhanced demand forecast accuracy by 35%'
      ],
      image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1200',
      categories: ['datasets', 'team']
    }
  ];
  
  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.categories.includes(filter));
  
  const categories = [
    { id: 'all', name: 'All Case Studies' },
    { id: 'datasets', name: 'Datasets' },
    { id: 'models', name: 'Predictive Models' },
    { id: 'team', name: 'Data Science Team' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'edge', name: 'Edge Computing' }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-data-light py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our data science solutions have delivered measurable results for our clients
            </p>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-10 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className="min-w-[120px]"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {filteredStudies.map((study, index) => (
                <CaseStudy
                  key={study.title}
                  title={study.title}
                  company={study.company}
                  description={study.description}
                  results={study.results}
                  image={study.image}
                  index={index}
                />
              ))}
              
              {filteredStudies.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No case studies found</h3>
                  <p className="text-gray-600 mb-6">
                    No case studies match your current filter selection
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => setFilter('all')}
                  >
                    View All Case Studies
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-data-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to become our next success story?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our data science solutions can help your organization achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-data-navy hover:bg-white/90">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
