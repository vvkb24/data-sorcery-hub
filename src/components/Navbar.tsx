
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="The Data Experts - Home"
          >
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <div className="absolute inset-0 bg-data-blue rounded-md opacity-70"></div>
              <div className="absolute inset-1 bg-white rounded-md"></div>
              <div className="absolute inset-2 bg-data-teal rounded-sm opacity-80"></div>
            </div>
            <span className="text-lg sm:text-xl font-semibold">The Data Experts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "inline-flex text-sm font-medium transition-colors duration-200 relative py-1",
                  location.pathname === link.path
                    ? "text-data-blue"
                    : "text-gray-600 hover:text-data-blue"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-data-blue rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors duration-200 text-white bg-data-blue hover:bg-data-blue/90"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span 
                className={cn(
                  "block h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out",
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                )} 
              />
              <span 
                className={cn(
                  "block h-0.5 bg-gray-700 transition-opacity duration-300 ease-in-out",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )} 
              />
              <span 
                className={cn(
                  "block h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out",
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={cn(
          "absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden md:hidden",
          isMenuOpen ? "max-h-64 border-t" : "max-h-0"
        )}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block px-3 py-3 text-base font-medium transition-colors duration-200",
                location.pathname === link.path
                  ? "text-data-blue"
                  : "text-gray-600 hover:text-data-blue"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center rounded-md mt-3 px-4 py-3 text-base font-medium text-white bg-data-blue hover:bg-data-blue/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
