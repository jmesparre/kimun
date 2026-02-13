export default function Footer() {
  return (
    <footer className="bg-[#d0e4e6]">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Kimün</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Construcción ecológica. Innovación, sustentabilidad y diseño integral.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contacto</h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>Dirección: Local 7, Paseo Serrano, Estancia Grande</li>
              <li>Teléfono: 2664197704</li>
              <li>Email: viviendaskimun@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                WhatsApp
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
