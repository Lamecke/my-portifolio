import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8 text-primary" />,
      technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8 text-primary" />,
      technologies: ["Java Spring", "Node.js", "Dotnet"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      technologies: ["React Native", "Android"]
    },
    {
      category: "Ferramentas",
      icon: <Code className="w-8 h-8 text-primary" />,
      technologies: ["Git", "Docker", "Vercel", "Figma", "VS Code"]
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça um pouco mais sobre minha jornada e experiência no desenvolvimento web
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Desenvolvedor apaixonado por tecnologia
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Com mais de 1 anos de experiência em desenvolvimento web, tenho me dedicado
                  a criar soluções digitais que fazem a diferença. Minha jornada começou com
                  curiosidade sobre como os sites funcionam e evoluiu para uma paixão por
                  construir aplicações completas e eficientes.
                </p>

                <p>
                  Especializo-me em desenvolvimento full stack, com foco em tecnologias modernas
                  como React, Node.js e bancos de dados relacionais e não-relacionais. Acredito
                  que o código limpo e a experiência do usuário são fundamentais para o sucesso
                  de qualquer projeto.
                </p>

                <p>
                  Quando não estou programando, gosto de me manter atualizado com as últimas
                  tendências em tecnologia, contribuir para projetos open source e compartilhar
                  conhecimento com a comunidade de desenvolvedores.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h4 className="text-xl font-semibold text-foreground ml-3">
                      {skill.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

