
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };
  
  return (
    <section id="contact" className="section-padding bg-navy-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-400 font-medium bg-gold-50 px-4 py-1.5 rounded-full">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-500 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question about a property or want to discuss your real estate goals, our team is here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="font-serif text-2xl text-navy-500 font-bold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-navy-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium text-navy-500">(301) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-navy-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-navy-500">info@coremdrealestate.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-navy-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Office Address</p>
                    <p className="font-medium text-navy-500">
                      1234 Harbor Boulevard, <br />
                      Suite 500, <br />
                      Annapolis, MD 21401
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium text-navy-500 mb-2">Office Hours</p>
                <div className="text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-serif text-2xl text-navy-500 font-bold mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-500 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-navy-200 focus-visible:ring-gold-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-500 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="border-navy-200 focus-visible:ring-gold-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-500 mb-1">
                    Phone
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Your phone number" 
                    className="border-navy-200 focus-visible:ring-gold-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-500 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="border-navy-200 focus-visible:ring-gold-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-500 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your request in detail" 
                    className="h-32 border-navy-200 focus-visible:ring-gold-400"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-navy-500 hover:bg-navy-600 w-full py-6 text-lg rounded-sm"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
