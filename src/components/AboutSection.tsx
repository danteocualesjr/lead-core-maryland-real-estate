
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80" 
                alt="CORE Maryland Team" 
                className="rounded-md shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-12 -right-12 -z-0 hidden lg:block">
              <div className="h-full w-full border-2 border-gold-400 rounded-md absolute top-12 -right-12"></div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="inline-block mb-4">
              <span className="text-gold-400 font-medium bg-gold-50 px-4 py-1.5 rounded-full">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-500 mb-6">
              Maryland's Premier <br />Real Estate Experience
            </h2>
            <p className="text-muted-foreground mb-6">
              At CORE Maryland Real Estate, we believe that finding the perfect property goes beyond transactions—it's about understanding your dreams and making them a reality. With decades of combined experience in Maryland's diverse real estate markets, our dedicated team brings exceptional expertise and personalized service to every client relationship.
            </p>
            <p className="text-muted-foreground mb-8">
              From waterfront properties in Annapolis to historic homes in Baltimore and modern condominiums in Bethesda, we guide you through every step of your real estate journey with integrity, professionalism, and attention to detail.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-1">350+</div>
                <p className="text-navy-500">Properties Sold</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-1">98%</div>
                <p className="text-navy-500">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-1">15+</div>
                <p className="text-navy-500">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-1">24/7</div>
                <p className="text-navy-500">Client Support</p>
              </div>
            </div>
            
            <Button className="bg-navy-500 hover:bg-navy-600 text-white rounded-sm">
              Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
