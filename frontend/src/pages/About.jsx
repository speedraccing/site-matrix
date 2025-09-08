import React from 'react';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { mockData } from '../mock';

const About = () => {
  const { company, team } = mockData;

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-green-400 drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]">Matrix Code</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all duration-300">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-white">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {company.mission}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all duration-300">
                  <Eye className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-white">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {company.vision}
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all duration-300">
                  <Heart className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-white">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {company.values.map((value, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {value}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)]">Equipe</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Profissionais apaixonados por tecnologia e inovação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-500/50 hover:border-green-400 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.6)] transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-green-400 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">Tecnologias</span> que Dominamos
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Utilizamos as mais modernas tecnologias para criar soluções robustas e escaláveis
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'React', 'Node.js', 'Python', 'PostgreSQL',
              'MongoDB', 'Docker', 'AWS', 'Next.js',
              'TypeScript', 'GraphQL', 'Redis', 'Kubernetes'
            ].map((tech, index) => (
              <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;