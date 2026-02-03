import ProductCard from './ProductCard';

const products = [
  {
    imageUrl: '/hero.jpg',
    title: 'Tiny House',
    size: '32',
    description: '2 ambientes',
  },
  {
    imageUrl: '/hero.jpg',
    title: 'Vivienda',
    size: '80',
    description: '3 ambientes',
  },
  {
    imageUrl: '/hero.jpg',
    title: 'Maxi vivienda',
    size: '160',
    description: '4 ambientes',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-42">
      <div className="container mx-auto  px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d0e4e6] uppercase leading-tight text-center">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 xl:gap-0 justify-items-center pt-30">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
