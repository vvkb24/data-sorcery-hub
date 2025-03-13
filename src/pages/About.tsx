
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
      bio: 'Former Lead Data Scientist at Google with 15+ years of experience in machine learning and data analytics.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=500',
      bio: 'Previously built data infrastructure at Amazon. Expert in cloud architecture and distributed systems.'
    },
    {
      name: 'Dr. Aisha Johnson',
      role: 'Chief Research Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500',
      bio: 'PhD in Statistical Learning from MIT. Published author with focus on predictive modeling techniques.'
    },
    {
      name: 'Thomas Zhang',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500',
      bio: 'Edge computing specialist with background in IoT systems and real-time data processing.'
    },
    {
      name: 'Olivia Williams',
      role: 'Head of Data Science',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500',
      bio: 'Previously led the machine learning team at Netflix. Expert in recommendation systems.'
    },
    {
      name: 'James Davidson',
      role: 'Chief Data Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500',
      bio: 'Former consultant at McKinsey specializing in data strategy and digital transformation.'
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-data-light py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Data Experts</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize data science and empower organizations with actionable insights
            </p>
          </div>
        </section>
        
        {/* Company Info Tabs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap border-b border-gray-200 mb-10">
              {['mission', 'story', 'values', 'approach'].map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "px-6 py-3 text-base font-medium border-b-2 -mb-px transition-colors",
                    activeTab === tab
                      ? "border-data-blue text-data-blue"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'mission' && 'Our Mission'}
                  {tab === 'story' && 'Our Story'}
                  {tab === 'values' && 'Our Values'}
                  {tab === 'approach' && 'Our Approach'}
                </button>
              ))}
            </div>
            
            <div className="tab-content py-6">
              {activeTab === 'mission' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <p className="text-lg text-gray-600 mb-6">
                        At The Data Experts, our mission is to democratize data science by making high-quality data and advanced analytics accessible to organizations of all sizes. We believe that accurate data and powerful insights should not be the exclusive domain of tech giants with unlimited resources.
                      </p>
                      <p className="text-lg text-gray-600 mb-6">
                        We're committed to providing 99.9% accurate data through rigorous collection and validation methods, ensuring that our clients have the most reliable foundation for their decision-making processes.
                      </p>
                    </div>
                    <div className="bg-data-light rounded-xl p-8">
                      <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-data-blue/10 flex items-center justify-center mr-3">
                            <div className="h-2 w-2 rounded-full bg-data-blue"></div>
                          </div>
                          <span>Unmatched data accuracy of 99.9%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-data-blue/10 flex items-center justify-center mr-3">
                            <div className="h-2 w-2 rounded-full bg-data-blue"></div>
                          </div>
                          <span>Transparent methodologies and documentation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-data-blue/10 flex items-center justify-center mr-3">
                            <div className="h-2 w-2 rounded-full bg-data-blue"></div>
                          </div>
                          <span>Ethical data collection and usage practices</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-data-blue/10 flex items-center justify-center mr-3">
                            <div className="h-2 w-2 rounded-full bg-data-blue"></div>
                          </div>
                          <span>Commitment to continuous improvement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'story' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600">
                      The Data Experts was founded in 2015 by Dr. Sarah Chen, who recognized a critical gap in the market: while data was becoming increasingly valuable, many organizations struggled to access high-quality datasets and lacked the expertise to derive meaningful insights from their information.
                    </p>
                    <p className="text-lg text-gray-600">
                      Drawing on her experience as a Lead Data Scientist at Google, Dr. Chen assembled a team of industry veterans and academic experts with a shared vision of making data science more accessible and impactful.
                    </p>
                    <p className="text-lg text-gray-600">
                      What began as a specialized consultancy has evolved into a comprehensive data science company offering datasets, models, expert services, and computing infrastructure. Today, we serve clients across industries—from startups to Fortune 500 companies—helping them harness the power of data to drive innovation and growth.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our recent expansion into edge computing reflects our commitment to staying at the forefront of technological advancement and addressing the evolving needs of our clients in an increasingly connected world.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'values' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-md rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
                      <p className="text-gray-600">
                        We're obsessed with accuracy in everything we do, from data collection to model development. Our reputation is built on our 99.9% accuracy standard.
                      </p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                      <p className="text-gray-600">
                        We believe in full transparency about our methodologies, limitations, and results. Our clients always understand exactly what they're getting.
                      </p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                      <p className="text-gray-600">
                        We continuously push the boundaries of what's possible in data science, investing in R&D to develop new techniques and solutions.
                      </p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">Ethical Practice</h3>
                      <p className="text-gray-600">
                        We adhere to the highest ethical standards in data collection, privacy protection, and algorithm development to ensure responsible use of data.
                      </p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                      <p className="text-gray-600">
                        We believe the best results come from close collaboration with our clients, combining our technical expertise with their domain knowledge.
                      </p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                      <p className="text-gray-600">
                        We're committed to making advanced data science accessible to organizations of all sizes through clear communication and scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'approach' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                  <div className="space-y-8">
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">1. Understand</h3>
                      <p className="text-gray-600">
                        We begin by deeply understanding your business challenges, goals, and the specific context in which you operate. This foundation ensures that our data solutions address your actual needs rather than presumed ones.
                      </p>
                    </div>
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">2. Design</h3>
                      <p className="text-gray-600">
                        Based on our understanding, we design a tailored data strategy and solution architecture that leverages the right combination of datasets, models, and infrastructure to meet your objectives efficiently.
                      </p>
                    </div>
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">3. Implement</h3>
                      <p className="text-gray-600">
                        Our expert team implements the solution with rigorous attention to detail, ensuring that every component meets our high standards for accuracy and performance before deployment.
                      </p>
                    </div>
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">4. Validate</h3>
                      <p className="text-gray-600">
                        We thoroughly validate all results against real-world outcomes and established benchmarks, confirming that the solution delivers the expected value and insights.
                      </p>
                    </div>
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">5. Iterate</h3>
                      <p className="text-gray-600">
                        Data science is an iterative process. We continuously monitor, evaluate, and refine our solutions based on feedback and changing requirements to ensure ongoing value delivery.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section id="team" className="py-16 bg-data-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Industry veterans and academic experts united by a passion for transforming data into actionable insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals who are passionate about data science and want to make an impact
              </p>
              <Button>View Open Positions</Button>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-data-blue mb-2">99.9%</p>
                <p className="text-gray-600">Data Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-data-blue mb-2">250+</p>
                <p className="text-gray-600">Enterprise Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-data-blue mb-2">45+</p>
                <p className="text-gray-600">Data Scientists</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-data-blue mb-2">8 Years</p>
                <p className="text-gray-600">Industry Experience</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="bg-data-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to work with us?</h2>
              <p className="text-white/80">Get in touch to discuss how we can help with your data challenges</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-data-navy hover:bg-white/90 min-w-[140px]">
                Contact Us
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-[140px]">
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

export default About;
