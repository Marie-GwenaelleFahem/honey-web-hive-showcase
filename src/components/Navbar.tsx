
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flower } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Apiculture', path: '/apiculture' },
    { name: 'Produits', path: '/produits' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-sage-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-sage-100 rounded-full group-hover:bg-sage-200 transition-colors">
              <Flower className="h-6 w-6 text-sage-600" />
            </div>
            <span className="font-bold text-xl text-forest-800">Honebee</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-sage-600 ${
                  isActive(item.path) ? 'text-sage-700' : 'text-forest-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-sage-600 hover:bg-sage-700 text-white">
              Nous contacter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-forest-700 hover:text-sage-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-sage-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-sage-50 ${
                    isActive(item.path) ? 'text-sage-700 bg-sage-50' : 'text-forest-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
