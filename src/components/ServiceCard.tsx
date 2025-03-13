
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, link, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "data-card glass-card group",
        "transform transition-all duration-300 ease-out",
        "hover:translate-y-[-8px] hover:bg-white"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className={cn(
          "w-14 h-14 flex items-center justify-center rounded-lg mb-5",
          "bg-data-blue/10 text-data-blue",
          "transition-all duration-500 ease-out",
          isHovered ? "bg-data-blue text-white" : ""
        )}>
          {icon}
        </div>
        
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-data-blue font-medium group-hover:translate-x-1 transition-transform duration-300"
        >
          Learn More
          <svg 
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        
        {/* Decorative background element */}
        <div 
          className={cn(
            "absolute -bottom-10 -right-10 w-32 h-32 rounded-full",
            "bg-data-blue/5 transition-all duration-500",
            isHovered ? "scale-150 bg-data-blue/10" : "scale-100"
          )}
        ></div>
      </div>
    </div>
  );
};

export default ServiceCard;
