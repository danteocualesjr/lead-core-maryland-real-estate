
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, User, Heart } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "We help you market and sell your property for the best possible price with comprehensive marketing strategies and professional negotiations."
  },
  {
    icon: Search,
    title: "Property Search",
    description: "Let us help you find your dream property with our extensive market knowledge and personalized property searches tailored to your needs."
  },
  {
    icon: User,
    title: "Client Guidance",
    description: "Our experienced agents provide expert guidance throughout the entire buying or selling process, ensuring a smooth and stress-free experience."
  },
  {
    icon: Heart,
    title: "Luxury Homes",
    description: "Specialized service for distinctive luxury properties, with tailored marketing strategies and access to exclusive high-end property networks."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-navy-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-400 font-medium bg-gold-50 px-4 py-1.5 rounded-full">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-500 mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a full range of real estate services designed to address every aspect of buying or selling property in Maryland.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full"
            >
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-gold-500" />
                </div>
                <CardTitle className="font-serif text-xl text-navy-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-500 mb-4">
                Ready to Start Your Real Estate Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking to buy, sell, or simply explore the market, our team is here to help you every step of the way.
              </p>
              <div className="glass-dark inline-block self-start rounded-sm overflow-hidden">
                <a 
                  href="#contact" 
                  className="flex items-center justify-between bg-navy-500 text-white px-6 py-3 hover:bg-navy-600 transition-colors"
                >
                  <span className="font-medium">Schedule a Consultation</span>
                  <span className="ml-3">→</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80" 
                alt="Consultation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

