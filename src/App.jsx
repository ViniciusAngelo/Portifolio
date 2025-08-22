import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Cpu } from 'lucide-react'
import profileImage from './assets/profile.jpg'
import projectAiImage from './assets/project-ai.jpeg'
import './App.css'

function App() {
  const skills = [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Machine Learning', category: 'AI' },
    { name: 'Data Structures', category: 'Algorithms' }
  ]

  const projects = [
    {
      title: 'Sistema de Inteligência Artificial',
      description: 'Desenvolvimento de um sistema de IA para análise de dados e predições usando Python e TensorFlow.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      image: projectAiImage,
      github: '#',
      demo: '#'
    },
    {
      title: 'Aplicação Web Full-Stack',
      description: 'Aplicação completa com React no frontend e Node.js no backend, incluindo autenticação e banco de dados.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: null,
      github: '#',
      demo: '#'
    },
    {
      title: 'Sistema de Gerenciamento',
      description: 'Sistema desktop para gerenciamento de dados empresariais desenvolvido em Java com interface gráfica.',
      technologies: ['Java', 'JavaFX', 'MySQL', 'Maven'],
      image: null,
      github: '#',
      demo: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Vinicius Angelo</h1>
            <div className="flex space-x-6">
              <a href="#sobre" className="text-slate-600 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#projetos" className="text-slate-600 hover:text-blue-600 transition-colors">Projetos</a>
              <a href="#habilidades" className="text-slate-600 hover:text-blue-600 transition-colors">Habilidades</a>
              <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Vinicius Angelo" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
            />
            <h2 className="text-5xl font-bold text-slate-800 mb-4">
              Olá, eu sou <span className="text-blue-600">Vinicius Angelo</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Engenheiro da Computação apaixonado por tecnologia, desenvolvimento de software e inovação. 
              Especializado em criar soluções eficientes e escaláveis.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Entre em Contato
              </Button>
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Sobre Mim</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                Sou um engenheiro da computação com paixão por resolver problemas complexos através da tecnologia. 
                Tenho experiência em desenvolvimento full-stack, inteligência artificial e arquitetura de sistemas.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Minha jornada na tecnologia começou durante a graduação, onde desenvolvi projetos que combinam 
                teoria e prática para criar soluções inovadoras. Estou sempre em busca de novos desafios e 
                oportunidades para crescer profissionalmente.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Desenvolvimento</h4>
                  <p className="text-sm text-slate-600">Full-Stack</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Cpu className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Inteligência</h4>
                  <p className="text-sm text-slate-600">Artificial</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Banco de</h4>
                  <p className="text-sm text-slate-600">Dados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Aplicações</h4>
                  <p className="text-sm text-slate-600">Web</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Projetos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                {project.image && (
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {!project.image && (
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Habilidades</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Frontend', 'Backend', 'Database', 'Tools', 'DevOps', 'Cloud', 'AI', 'Algorithms'].map((category) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <Badge key={index} variant="outline">{skill.name}</Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">Entre em Contato</h3>
          <p className="text-lg text-slate-600 mb-8">
            Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar!
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              vinicius.angelo@email.com
            </Button>
            <Button size="lg" variant="outline">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Vinicius Angelo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

