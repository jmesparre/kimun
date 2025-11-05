import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  modules: string;
  features: string[];
}

export default function ProductCard({ imageUrl, title, price, modules, features }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg relative h-[500px]">
      <Image 
        src={imageUrl} 
        alt={title} 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover absolute z-0" 
      />
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col h-full p-6 shadow-lg text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-4xl font-extrabold mb-2">{price}</p>
          <p className="text-xl font-semibold">{modules}</p>
        </CardContent>
        <CardFooter>
          <ul className="text-sm space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CardFooter>
      </div>
    </Card>
  );
}
