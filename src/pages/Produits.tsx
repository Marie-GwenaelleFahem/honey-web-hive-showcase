
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Leaf, Award, Heart } from 'lucide-react';
import Layout from '@/components/Layout';

const Produits = () => {
  const products = [
    {
      id: 1,
      name: 'Miel Toutes Fleurs',
      category: 'Miel',
      price: '12€',
      weight: '500g',
      description: 'Un miel doux et parfumé, récolté dans nos ruchers aux environnements préservés.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      reviews: 127,
      badges: ['Bio', 'Local'],
      benefits: ['Riche en antioxydants', 'Énergie naturelle', 'Antibactérien']
    },
    {
      id: 2,
      name: 'Miel d\'Acacia',
      category: 'Miel',
      price: '15€',
      weight: '500g',
      description: 'Miel cristallisation lente, au goût délicat et à la texture crémeuse exceptionnelle.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      reviews: 89,
      badges: ['Premium', 'Bio'],
      benefits: ['Goût délicat', 'Cristallisation lente', 'Digestion facile']
    },
    {
      id: 3,
      name: 'Propolis Pure',
      category: 'Propolis',
      price: '25€',
      weight: '20g',
      description: 'Propolis pure aux propriétés antiseptiques et immunostimulantes reconnues.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      reviews: 54,
      badges: ['Thérapeutique', 'Naturel'],
      benefits: ['Antiseptique', 'Immunostimulant', 'Anti-inflammatoire']
    },
    {
      id: 4,
      name: 'Cire d\'Abeille',
      category: 'Cire',
      price: '18€',
      weight: '250g',
      description: 'Cire d\'abeille naturelle idéale pour cosmétiques, bougies et entretien du bois.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      reviews: 76,
      badges: ['Artisanal', 'Multi-usage'],
      benefits: ['100% naturelle', 'Hydratante', 'Protectrice']
    },
    {
      id: 5,
      name: 'Pollen Frais',
      category: 'Pollen',
      price: '22€',
      weight: '200g',
      description: 'Pollen frais surgelé, source exceptionnelle de protéines et vitamines naturelles.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
      reviews: 43,
      badges: ['Frais', 'Protéiné'],
      benefits: ['Riche en protéines', 'Vitamines B', 'Énergie durable']
    },
    {
      id: 6,
      name: 'Gelée Royale',
      category: 'Gelée Royale',
      price: '45€',
      weight: '50g',
      description: 'Gelée royale fraîche, véritable concentré de vitalité aux vertus exceptionnelles.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      reviews: 32,
      badges: ['Premium', 'Vitalité'],
      benefits: ['Revitalisant', 'Anti-âge', 'Stimulant']
    }
  ];

  const categories = ['Tous', 'Miel', 'Propolis', 'Cire', 'Pollen', 'Gelée Royale'];

  const usages = [
    {
      icon: <Heart className="h-8 w-8 text-sage-600" />,
      title: 'Bien-être & Santé',
      description: 'Nos produits naturels soutiennent votre vitalité au quotidien.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-sage-600" />,
      title: 'Cosmétique Naturelle',
      description: 'Créez vos soins avec nos matières premières pures et naturelles.'
    },
    {
      icon: <Award className="h-8 w-8 text-sage-600" />,
      title: 'Gastronomie',
      description: 'Sublimez vos créations culinaires avec nos miels d\'exception.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-honey-50 via-white to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-honey-100 text-honey-700 rounded-full text-sm font-medium mb-4">
              PRODUITS DE LA RUCHE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-800 mb-6">
              Des Trésors
              <span className="block text-honey-600">de la Nature</span>
            </h1>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme exceptionnelle de produits naturels de la ruche, 
              récoltés avec passion et respect dans nos ruchers préservés.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-forest-800">
                Nous Avons des Barils de Miel
                <span className="block text-sage-600">Rien que pour Vous</span>
              </h2>
              <p className="text-forest-600 leading-relaxed">
                Chaque produit de notre ruche est le fruit d'un savoir-faire artisanal transmis de génération en génération. 
                Nous privilégions la qualité à la quantité pour vous offrir le meilleur de la nature.
              </p>
              <div className="space-y-4">
                {usages.map((usage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      {usage.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-800 mb-1">{usage.title}</h3>
                      <p className="text-forest-600 text-sm">{usage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80" 
                  alt="Produits de la ruche"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Tous' ? 'default' : 'outline'}
                className={category === 'Tous' ? 'bg-sage-600 hover:bg-sage-700' : 'border-sage-300 text-sage-700 hover:bg-sage-50'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-sage-200">
                <div className="aspect-square rounded-t-lg overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {product.badges.map((badge) => (
                      <Badge key={badge} className="bg-white/90 text-sage-700 text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-forest-800 group-hover:text-sage-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xl font-bold text-sage-600">{product.price}</span>
                  </div>
                  
                  <p className="text-sm text-sage-600 mb-2">{product.weight}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-honey-500 fill-current" />
                      <span className="ml-1 text-sm font-medium text-forest-700">{product.rating}</span>
                    </div>
                    <span className="mx-2 text-sage-400">•</span>
                    <span className="text-sm text-sage-600">{product.reviews} avis</span>
                  </div>
                  
                  <p className="text-forest-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-sage-700 mb-2 uppercase tracking-wide">Bienfaits</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit) => (
                        <span key={benefit} className="text-xs bg-sage-50 text-sage-600 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ajouter au panier
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Notre Engagement Qualité
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              Chaque produit respecte nos standards d'excellence pour vous garantir authenticité et qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Leaf className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-semibold text-forest-800 mb-2">100% Naturel</h3>
              <p className="text-forest-600 text-sm">Aucun additif, aucun traitement chimique</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Award className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-semibold text-forest-800 mb-2">Certifié Bio</h3>
              <p className="text-forest-600 text-sm">Agriculture biologique certifiée</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Heart className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-semibold text-forest-800 mb-2">Fait avec Amour</h3>
              <p className="text-forest-600 text-sm">Passion et savoir-faire artisanal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Star className="h-8 w-8 text-sage-600" />
              </div>
              <h3 className="font-semibold text-forest-800 mb-2">Qualité Premium</h3>
              <p className="text-forest-600 text-sm">Sélection rigoureuse des meilleurs produits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-honey-400 to-sage-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Commandez vos Produits Naturels
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Livraison gratuite dès 50€ d'achat. Satisfait ou remboursé sous 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-700 hover:bg-sage-50">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Commander maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-700">
              Catalogue complet
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produits;
