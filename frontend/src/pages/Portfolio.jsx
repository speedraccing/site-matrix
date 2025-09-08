import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockData } from '../mock';

const Portfolio = () => {
  const { portfolio } = mockData;
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(portfolio.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'Todos' 
    ? portfolio 
    : portfolio.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Concluído':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Em desenvolvimento':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso <span className="text-green-400 drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos e as soluções 
              inovadoras que criamos para nossos clientes
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Filter className="h-5 w-5 text-green-400 mt-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-green-500 text-black font-bold hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]"
                    : "border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.4)]"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="border-green-500 text-green-400 mb-3">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tecnologias Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-green-500 hover:bg-green-400 text-black font-bold transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.6)] hover:scale-105"
                      onClick={() => console.log('Ver projeto:', project.title)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.4)] transition-all duration-300"
                      onClick={() => console.log('Ver código:', project.title)}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tem um <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)]">Projeto</span> em Mente?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vamos conversar sobre como podemos transformar sua ideia em realidade
          </p>
          <Button 
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 text-lg transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.6)] hover:scale-105"
            onClick={() => window.location.href = '/contact'}
          >
            Iniciar Projeto
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;