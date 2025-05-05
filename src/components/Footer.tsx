
import { cn } from '@/lib/utils';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-500 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-white">
                CORE
              </span>
              <span className="ml-2 text-sm font-light tracking-wider text-white/80">
                MARYLAND REAL ESTATE
              </span>
            </a>
            <p className="mt-4 text-white/70 max-w-xs">
              Maryland's premier real estate experience, delivering exceptional service and results for clients across the state.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gold-400 mr-3" />
                <span className="text-white/90">1234 Harbor Boulevard, Annapolis, MD</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold-400 mr-3" />
                <span className="text-white/90">(301) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold-400 mr-3" />
                <span className="text-white/90">info@coremdrealestate.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Properties</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Featured Listings</FooterLink>
              <FooterLink href="#">New Properties</FooterLink>
              <FooterLink href="#">Waterfront Homes</FooterLink>
              <FooterLink href="#">Luxury Properties</FooterLink>
              <FooterLink href="#">Investment Properties</FooterLink>
              <FooterLink href="#">Commercial Real Estate</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#">Our Team</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press & Media</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Market Insights</FooterLink>
              <FooterLink href="#">Buyer's Guide</FooterLink>
              <FooterLink href="#">Seller's Guide</FooterLink>
              <FooterLink href="#">Neighborhood Guides</FooterLink>
              <FooterLink href="#">Mortgage Calculator</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-navy-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70">
              © {currentYear} CORE Maryland Real Estate. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-white/70 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className={cn(
        "text-white/70 hover:text-gold-400 transition-colors"
      )}
    >
      {children}
    </a>
  </li>
);

export default Footer;
