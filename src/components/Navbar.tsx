
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>      
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
  <img
    src="/logo.jpg"
    alt="Paradise Estimating Logo"
    className={`h-16 w-auto object-contain transition-transform duration-300 relative hidden sm:inline-block group-hover:scale-110 ${isScrolled ? '' : ''}`}
  />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/') ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/services') ? 'font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/portfolio') ? 'font-semibold' : ''}`}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/about') ? 'font-semibold' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/contact') ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-white hover:text-gold text-white transition-colors duration-300">
              <Link to="/estimate-download">Get a Quote</Link>
            </Button>
          </div>

          <button className={`lg:hidden ${isScrolled ? 'text-navy' : 'text-white'}`} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
            <Link
              to="/"
              className={`text-navy py-2 ${isActive('/') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-navy py-2 ${isActive('/services') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`text-navy py-2 ${isActive('/portfolio') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className={`text-navy py-2 ${isActive('/about') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-navy py-2 ${isActive('/contact') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-navy text-white w-full">
              <Link to="/estimate-download">Get a Quote</Link>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
