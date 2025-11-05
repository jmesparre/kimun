export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto py-8 px-4 md:px-6">
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
              <li>Dirección: </li>
              <li>Teléfono: </li>
              <li>Email: </li>
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
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kimün. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
