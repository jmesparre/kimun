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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
