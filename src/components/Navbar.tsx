
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
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

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-serif font-bold transition-colors",
              isScrolled ? "text-navy-500" : "text-white"
            )}>
              CORE
            </span>
            <span className={cn(
              "ml-2 text-sm font-light tracking-wider transition-colors",
              isScrolled ? "text-navy-300" : "text-white/90"
            )}>
              MARYLAND REAL ESTATE
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#properties" isScrolled={isScrolled}>Properties</NavLink>
          <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
          <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
          <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          <Button 
            variant="outline" 
            className={cn(
              "border-2 rounded-sm transition-all",
              isScrolled 
                ? "border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white"
                : "border-white text-white hover:bg-white/20 bg-white/10"
            )}
          >
            (301) 555-0123
          </Button>
        </nav>
        
        <button 
          className={cn(
            "md:hidden p-2 rounded-full",
            isScrolled ? "text-navy-500" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <nav className="flex flex-col py-4">
            <a href="#properties" className="px-4 py-3 text-navy-500 hover:bg-navy-50">Properties</a>
            <a href="#about" className="px-4 py-3 text-navy-500 hover:bg-navy-50">About</a>
            <a href="#services" className="px-4 py-3 text-navy-500 hover:bg-navy-50">Services</a>
            <a href="#contact" className="px-4 py-3 text-navy-500 hover:bg-navy-50">Contact</a>
            <div className="px-4 py-3">
              <Button 
                variant="outline" 
                className="border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white w-full rounded-sm"
              >
                (301) 555-0123
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ 
  href, 
  children, 
  isScrolled 
}: { 
  href: string; 
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <a
    href={href}
    className={cn(
      "transition-colors hover:text-gold-400",
      isScrolled ? "text-navy-500" : "text-white"
    )}
  >
    {children}
  </a>
);

export default Navbar;

