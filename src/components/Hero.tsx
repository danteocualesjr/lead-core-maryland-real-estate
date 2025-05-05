
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/80 to-navy-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto md:ml-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fade-up">
            Discover Your <span className="text-gold-400">Perfect</span> Property in Maryland
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            CORE Maryland Real Estate offers exceptional properties and personalized service to help you find your dream home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-navy-900 rounded-sm h-14 text-lg px-8">
              View Properties
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy-900 rounded-sm h-14 text-lg px-8">
              Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
