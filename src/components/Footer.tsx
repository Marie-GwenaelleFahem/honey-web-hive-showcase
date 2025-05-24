
import { Link } from 'react-router-dom';
import { Flower, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-sage-600 rounded-full">
                <Flower className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">Honebee</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Cultivons ensemble des carrières durables dans l'apiculture. 
              Découvrez nos produits naturels de la ruche et notre savoir-faire artisanal.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>474 - 937-8270</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contact@honebee.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>123 Rue des Abeilles, 75000 Paris</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/apiculture" className="text-gray-300 hover:text-white transition-colors">
                  Apiculture
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">
                  Produits
                </Link>
              </li>
            </ul>
          </div>

          {/* Produits */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Produits</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Miel toutes fleurs</li>
              <li>Miel d'acacia</li>
              <li>Propolis</li>
              <li>Cire d'abeille</li>
              <li>Pollen</li>
              <li>Gelée royale</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Honebee. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Mentions légales
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
