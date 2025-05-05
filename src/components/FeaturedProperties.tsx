
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PropertyCard, { PropertyType } from '@/components/PropertyCard';
import { cn } from '@/lib/utils';

const properties: PropertyType[] = [
  {
    id: 1,
    title: "Modern Waterfront Villa",
    address: "1234 Chesapeake Way, Annapolis, MD",
    price: "$1,450,000",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    address: "567 Harbor View, Baltimore, MD",
    price: "$2,100,000",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Historic Georgetown Home",
    address: "890 Cobblestone St, Bethesda, MD",
    price: "$1,275,000",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    title: "Countryside Estate",
    address: "421 Rolling Hills Dr, Frederick, MD",
    price: "$950,000",
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 3000,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    title: "Contemporary Townhouse",
    address: "789 Park Avenue, Silver Spring, MD",
    price: "$620,000",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    title: "Bayside Retreat",
    address: "123 Harbor Lane, Ocean City, MD",
    price: "$875,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const FeaturedProperties = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');
  
  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.featured);
  
  return (
    <section id="properties" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy-500 mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of premium properties across Maryland, each carefully selected to meet the highest standards of quality and elegance.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md border border-input p-1 bg-white">
            <Button 
              variant="ghost"
              onClick={() => setFilter('featured')}
              className={cn(
                "rounded-sm",
                filter === 'featured' && "bg-navy-500 text-white hover:bg-navy-600 hover:text-white"
              )}
            >
              Featured
            </Button>
            <Button 
              variant="ghost"
              onClick={() => setFilter('all')}
              className={cn(
                "rounded-sm",
                filter === 'all' && "bg-navy-500 text-white hover:bg-navy-600 hover:text-white"
              )}
            >
              All Properties
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-navy-500 hover:bg-navy-600 text-white rounded-sm px-8 py-6 text-lg">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
