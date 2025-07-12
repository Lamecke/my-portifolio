import { useState, useEffect } from 'react'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Projetos de exemplo (substitua pela integração real com GitHub API)
  const exampleProjects = [
    {
      id: 1,
      name: "E-commerce React",
      description: "Aplicação completa de e-commerce desenvolvida com React, Node.js e MongoDB. Inclui carrinho de compras, sistema de pagamento e painel administrativo.",
      html_url: "https://github.com/usuario/ecommerce-react",
      homepage: "https://ecommerce-demo.vercel.app",
      language: "JavaScript",
      stargazers_count: 45,
      forks_count: 12,
      topics: ["react", "nodejs", "mongodb", "ecommerce"]
    },
    {
      id: 2,
      name: "Task Manager App",
      description: "Aplicativo de gerenciamento de tarefas com React Native. Funcionalidades incluem criação, edição, categorização e sincronização em tempo real.",
      html_url: "https://github.com/usuario/task-manager",
      homepage: "https://task-manager-demo.com",
      language: "TypeScript",
      stargazers_count: 28,
      forks_count: 8,
      topics: ["react-native", "typescript", "firebase", "mobile"]
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "Dashboard interativo de clima com gráficos e previsões. Desenvolvido com React, Chart.js e integração com APIs de clima.",
      html_url: "https://github.com/usuario/weather-dashboard",
      homepage: "https://weather-dashboard-demo.netlify.app",
      language: "JavaScript",
      stargazers_count: 67,
      forks_count: 15,
      topics: ["react", "chartjs", "weather-api", "dashboard"]
    },
    {
      id: 4,
      name: "Blog CMS",
      description: "Sistema de gerenciamento de conteúdo para blogs com editor rich text, sistema de comentários e SEO otimizado.",
      html_url: "https://github.com/usuario/blog-cms",
      homepage: null,
      language: "Python",
      stargazers_count: 34,
      forks_count: 9,
      topics: ["django", "python", "cms", "blog"]
    },
    {
      id: 5,
      name: "Portfolio Website",
      description: "Site de portfólio responsivo desenvolvido com React e Tailwind CSS. Design moderno com animações suaves e otimizado para SEO.",
      html_url: "https://github.com/usuario/portfolio-website",
      homepage: "https://meuportfolio.com",
      language: "JavaScript",
      stargazers_count: 89,
      forks_count: 23,
      topics: ["react", "tailwindcss", "portfolio", "responsive"]
    },
    {
      id: 6,
      name: "API REST Node.js",
      description: "API RESTful robusta com autenticação JWT, validação de dados, documentação Swagger e testes automatizados.",
      html_url: "https://github.com/usuario/nodejs-api",
      homepage: null,
      language: "JavaScript",
      stargazers_count: 52,
      forks_count: 18,
      topics: ["nodejs", "express", "jwt", "api", "swagger"]
    }
  ]

  useEffect(() => {
    // Simula carregamento da API
    const loadProjects = async () => {
      try {
        setLoading(true)
        // Aqui você integraria com a GitHub API real
        // const response = await fetch('https://api.github.com/users/SEU_USERNAME/repos')
        // const data = await response.json()

        // Por enquanto, usamos projetos de exemplo
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simula delay da API
        setProjects(exampleProjects)
      } catch (err) {
        setError('Erro ao carregar projetos')
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const getLanguageColor = (language: any) => {
    const colors = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      CSS: 'bg-purple-500',
      HTML: 'bg-orange-500'
    }
    return colors[language] || 'bg-gray-500'
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Carregando projetos...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground line-clamp-1">
                    {project.name}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star size={16} />
                    <span>{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork size={16} />
                    <span>{project.forks_count}</span>
                  </div>
                  {project.language && (
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                      <span>{project.language}</span>
                    </div>
                  )}
                </div>

                {/* Project Topics */}
                {project.topics && project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.slice(0, 3).map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                      >
                        {topic}
                      </span>
                    ))}
                    {project.topics.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        +{project.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Project Actions */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      Código
                    </a>
                  </Button>
                  {project.homepage && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Lamecke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={20} />
                Ver Todos os Projetos no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

