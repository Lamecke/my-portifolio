import { Github, Linkedin, Mail, ArrowUp, MonitorCog } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">
                &lt;I´m Dev/&gt;
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvedor web apaixonado por criar experiências digitais
                incríveis e soluções inovadoras.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Links Rápidos
              </h3>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Sobre
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Projetos
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Contato
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:contato@exemplo.com"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>Lamecke_bruno@hotmail.com</span>
                </a>
                <p className="text-muted-foreground">
                  Sapé, PB - Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a
                href="https://github.com/Lamecke"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lameckebruno/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-blue-600 transition-colors hover:scale-110 transform"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:Lamecke_bruno@hotmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Desenvolvido por{' '}
                <MonitorCog className="inline w-4 h-4 text-red-500 mx-1" />{' '}
                Lamecke Bruno
              </p>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                title="Voltar ao topo"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

