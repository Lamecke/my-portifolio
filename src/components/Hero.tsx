import { ArrowDown, Download } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import cv from '@/assets/cv.pdf'

const Hero = () => {
  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 animate-fade-in">
            Olá, eu sou
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span className="text-primary">Lamecke Bruno</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8 animate-fade-in-up">
            Desenvolvedor Web Full Stack
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
            Apaixonado por criar experiências digitais incríveis. Especializado em React, Node.js
            e tecnologias modernas de desenvolvimento web. Transformo ideias em soluções digitais
            funcionais e elegantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => downloadPdfFromUrl(cv, 'Lamecke_Bruno_CV.pdf')}
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
function downloadPdfFromUrl(pdfUrl: string, filename: string): void {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default Hero

