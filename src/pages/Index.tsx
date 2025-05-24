
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Leaf, Users, Star, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  const services = [
    {
      title: 'Formation Apiculture',
      description: 'Apprenez les techniques professionnelles d\'élevage des abeilles avec nos experts.',
      image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=800&q=80',
      link: '/apiculture'
    },
    {
      title: 'Produits de la Ruche',
      description: 'Découvrez notre gamme complète de produits naturels : miel, propolis, cire et plus.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
      link: '/produits'
    },
    {
      title: 'Consultation Expert',
      description: 'Bénéficiez de conseils personnalisés pour optimiser votre production apicole.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
      link: '/apiculture'
    }
  ];

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-sage-600" />,
      title: 'Passion Authentique',
      description: 'Notre amour pour les abeilles guide chacune de nos actions.'
    },
    {
      icon: <Shield className="h-8 w-8 text-sage-600" />,
      title: 'Qualité Garantie',
      description: 'Tous nos produits respectent les plus hauts standards de qualité.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-sage-600" />,
      title: 'Respect de la Nature',
      description: 'Nos pratiques durables préservent l\'environnement et les abeilles.'
    },
    {
      icon: <Users className="h-8 w-8 text-sage-600" />,
      title: 'Expertise Partagée',
      description: 'Plus de 20 ans d\'expérience transmise avec générosité.'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Apicultrice débutante',
      content: 'Grâce à Honebee, j\'ai pu débuter sereinement dans l\'apiculture. Leur accompagnement est exceptionnel.',
      rating: 5
    },
    {
      name: 'Pierre Martin',
      role: 'Producteur de miel',
      content: 'La qualité de leurs produits et leur expertise m\'ont permis de développer mon activité avec succès.',
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      role: 'Passionnée de nature',
      content: 'Des produits naturels d\'une qualité rare. Je recommande vivement leurs miels d\'exception.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-honey-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-forest-800 mb-6 leading-tight">
              Cultivons ensemble des
              <span className="block text-sage-600">carrières en apiculture</span>
            </h1>
            <p className="text-xl md:text-2xl text-forest-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'art de l'apiculture et nos produits naturels de la ruche. 
              Votre partenaire pour un succès durable et authentique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-sage-600 text-sage-600 hover:bg-sage-50 px-8 py-4 text-lg"
              >
                Nos produits
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-60">
          <div className="w-16 h-16 bg-honey-200 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
          <div className="w-24 h-24 bg-sage-200 rounded-full"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              De la formation à la production, nous vous accompagnons dans toutes les étapes de votre parcours apicole.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-sage-200 hover:border-sage-300">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-forest-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-forest-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium group"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Pourquoi Choisir Honebee ?
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              Notre engagement envers l'excellence et la durabilité fait de nous votre partenaire idéal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-forest-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Témoignages de nos Clients
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de nos services et produits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-sage-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-honey-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-forest-600 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-forest-800">{testimonial.name}</p>
                    <p className="text-sage-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-forest-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Commencer Votre Aventure Apicole ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez notre communauté et découvrez les merveilles de l'apiculture avec des experts passionnés.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-4 text-lg font-semibold"
          >
            Contactez-nous dès maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
