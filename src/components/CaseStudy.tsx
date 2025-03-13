
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  company: string;
  description: string;
  results: string[];
  image: string;
  index: number;
}

const CaseStudy = ({ title, company, description, results, image, index }: CaseStudyProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div 
      className={cn(
        "flex flex-col lg:flex-row gap-6 lg:gap-10 items-center",
        "p-6 md:p-8 rounded-2xl",
        "bg-white shadow-md transition-all duration-300 hover:shadow-lg",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <div className="lg:w-1/2">
        <div className="mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-data-teal/10 text-data-teal text-sm font-medium mb-3">
            {company}
          </div>
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Key Results:</h4>
          <ul className="space-y-3">
            {results.map((result, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-data-teal mr-3 flex-shrink-0" />
                <span className="text-gray-600">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="lg:w-1/2 relative">
        <div className="aspect-video w-full overflow-hidden rounded-xl relative bg-gray-100 shadow-md transition-all duration-300 hover:shadow-lg">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700", 
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-data-blue/20 border-t-data-blue rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-data-blue/5 rounded-lg -z-10 transform -rotate-6"></div>
        <div className="absolute -top-3 -right-3 w-20 h-20 bg-data-teal/5 rounded-lg -z-10 transform rotate-12"></div>
      </div>
    </div>
  );
};

export default CaseStudy;
