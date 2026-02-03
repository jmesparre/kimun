import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  size: string;
  description: string;
}

export default function ProductCard({ imageUrl, title, size, description }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm min-h-[75vh] rounded-lg overflow-hidden shadow-lg relative border-0">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover absolute z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 flex flex-col h-full p-8 text-white items-center justify-between text-center">
        <div className="w-full text-center p-0">
          <h3 className="text-3xl font-bold tracking-wide uppercase">{title}</h3>
        </div>

        <CardContent className="flex-grow flex items-center justify-center p-0">
          <p className="text-6xl font-black opacity-90">
            {size} <span className="text-4xl text-gray-200">M2</span>
          </p>
        </CardContent>

        <CardFooter className="p-0">
          <p className="text-2xl font-semibold tracking-wider opacity-90">{description}</p>
        </CardFooter>
      </div>
    </Card>
  );
}
