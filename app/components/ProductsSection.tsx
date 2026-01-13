import ProductCard from './ProductCard';

const products = [
  {
    imageUrl: '/hero.jpg',
    title: 'Vivienda Unifamiliar',
    price: '$45.000.000',
    modules: '2 Módulos Habitables',
    features: ['Diseño Moderno', 'Eficiencia Energética', 'Entrega Rápida'],
  },
  {
    imageUrl: '/hero.jpg',
    title: 'Complejo Turístico',
    price: '$88.000.000',
    modules: '4 Módulos + Piscina',
    features: ['Alta Rentabilidad', 'Diseño Personalizado', 'Entorno Natural'],
  },
  {
    imageUrl: '/hero.jpg',
    title: 'Oficinas Modulares',
    price: '$30.000.000',
    modules: '2 Módulos de Oficina',
    features: ['Espacio Flexible', 'Instalación Rápida', 'Diseño Corporativo'],
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
