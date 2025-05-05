
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Jennifer Davis",
    role: "Home Buyer",
    content: "Working with CORE Maryland Real Estate was the best decision we made. Their knowledge of the Annapolis area was invaluable, and they found us our dream waterfront home within our budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Property Seller",
    content: "The team at CORE guided me through selling my historic property in Baltimore. Their marketing strategy attracted multiple offers, and we sold above asking price in just two weeks.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "First-time Buyer",
    content: "As a first-time homebuyer, I was nervous about the process. The CORE team was patient, educational, and supportive throughout the journey. They truly put my needs first.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 4,
    name: "Robert Johnson",
    role: "Luxury Home Seller",
    content: "The marketing package CORE created for my luxury home was impressive. Their attention to detail and connections with high-net-worth buyers made all the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-400 font-medium bg-gold-50 px-4 py-1.5 rounded-full">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-500 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our clients' success stories reflect our commitment to exceptional service and results.
          </p>
        </div>
        
        <div className="lg:max-w-5xl mx-auto">
          <Card className="border-none shadow-xl bg-white">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="hidden md:block md:col-span-2">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 md:col-span-3">
                  <div className="flex mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-navy-500 italic mb-8">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-navy-500">{testimonials[activeIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={handlePrev} 
                        className="p-2 rounded-full border border-navy-100 text-navy-500 hover:bg-navy-50"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={handleNext} 
                        className="p-2 rounded-full border border-navy-100 text-navy-500 hover:bg-navy-50"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                activeIndex === index ? "w-8 bg-gold-400" : "w-2.5 bg-navy-200"
              )}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
