
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export type PropertyType = {
  id: number;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  featured?: boolean;
};

const PropertyCard = ({ property }: { property: PropertyType }) => {
  return (
    <Card className="property-card overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 h-full">
      <div className="relative overflow-hidden h-64">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        {property.featured && (
          <Badge className="absolute top-4 right-4 bg-gold-400 text-navy-900 hover:bg-gold-500">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-serif text-xl text-navy-500">{property.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{property.address}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-2xl font-semibold text-gold-500 mb-3">{property.price}</p>
        <div className="flex justify-between text-sm text-navy-300">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.sqft.toLocaleString()} Sq Ft</span>
        </div>
      </CardContent>
      <CardFooter>
        <button className="text-navy-500 font-medium w-full py-2 border-t border-border/50 hover:text-gold-500 transition-colors">
          View Details
        </button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
