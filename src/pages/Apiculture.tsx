
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Calendar, Award, BookOpen, Microscope } from 'lucide-react';
import Layout from '@/components/Layout';

const Apiculture = () => {
  const beekeepingSteps = [
    {
      title: 'Installation des Ruches',
      description: 'Choix de l\'emplacement idéal et installation professionnelle de vos ruches selon les meilleures pratiques.',
      image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Gestion des Colonies',
      description: 'Surveillance régulière, inspection sanitaire et gestion saisonnière pour des colonies en pleine santé.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Récolte du Miel',
      description: 'Techniques de récolte respectueuses des abeilles pour obtenir un miel de qualité exceptionnelle.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const formations = [
    {
      icon: <BookOpen className="h-8 w-8 text-sage-600" />,
      title: 'Formation Débutant',
      duration: '3 jours',
      description: 'Apprentissage des bases de l\'apiculture : biologie des abeilles, matériel, premières manipulations.',
      price: '350€'
    },
    {
      icon: <Microscope className="h-8 w-8 text-sage-600" />,
      title: 'Formation Avancée',
      duration: '5 jours',
      description: 'Techniques professionnelles : élevage de reines, prévention des maladies, optimisation de la production.',
      price: '650€'
    },
    {
      icon: <Award className="h-8 w-8 text-sage-600" />,
      title: 'Certification Professionnelle',
      duration: '10 jours',
      description: 'Formation complète pour devenir apiculteur professionnel avec certification reconnue.',
      price: '1200€'
    }
  ];

  const services = [
    'Conseil personnalisé pour votre projet apicole',
    'Installation et maintenance de ruchers',
    'Suivi sanitaire des colonies',
    'Formation continue et perfectionnement',
    'Accompagnement à la commercialisation',
    'Certification bio et labels qualité'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 via-white to-honey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
              APICULTURE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-800 mb-6">
              L'Art de Cultiver
              <span className="block text-sage-600">l'Excellence Apicole</span>
            </h1>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez les secrets d'une apiculture durable et prospère. Nos experts vous accompagnent 
              dans chaque étape de votre parcours, de la formation à la production professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=800&q=80" 
                  alt="Apiculteur au travail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-forest-800">
                Votre Partenaire pour un Succès Durable
              </h2>
              <p className="text-forest-600 leading-relaxed">
                Avec plus de 20 ans d'expérience dans l'apiculture, nous mettons notre expertise 
                à votre service pour vous aider à développer une activité apicole prospère et respectueuse de l'environnement.
              </p>
              <div className="space-y-3">
                {services.slice(0, 4).map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-sage-600 flex-shrink-0" />
                    <span className="text-forest-700">{service}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                Découvrir nos formations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Le Processus Apicole
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              De l'installation des ruches à la récolte du miel, découvrez les étapes clés d'une apiculture réussie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beekeepingSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-sage-200">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-forest-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-forest-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Nos Formations Apicoles
            </h2>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              Que vous soyez débutant ou professionnel, nos formations s'adaptent à votre niveau et vos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="bg-white border-sage-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {formation.icon}
                    </div>
                    <h3 className="text-xl font-bold text-forest-800 mb-2">
                      {formation.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-honey-100 text-honey-700 rounded-full text-sm font-medium">
                      {formation.duration}
                    </span>
                  </div>
                  <p className="text-forest-600 mb-6 leading-relaxed text-center">
                    {formation.description}
                  </p>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-sage-600 mb-4">
                      {formation.price}
                    </p>
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                      S'inscrire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sage-600 mb-2">500+</div>
              <p className="text-forest-600">Apiculteurs formés</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sage-600 mb-2">1200+</div>
              <p className="text-forest-600">Ruches installées</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sage-600 mb-2">20+</div>
              <p className="text-forest-600">Années d'expérience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sage-600 mb-2">95%</div>
              <p className="text-forest-600">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-forest-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Notre Communauté d'Apiculteurs
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bénéficiez de notre expertise et développez votre activité apicole dans les meilleures conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage-700 hover:bg-sage-50">
              <Calendar className="mr-2 h-5 w-5" />
              Réserver une formation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-700">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apiculture;
