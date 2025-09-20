import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-cv-primary via-cv-primary-light to-cv-accent text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="flex-1 text-center lg:text-left">
                <h1 
                className="text-5xl md:text-6xl font-bold mb-4 tracking-tight uppercase" 
                style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                Chathura Rajapakse
                </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/90">
              Senior Software Development Engineer in Test
              </h2>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm md:text-base">
              <a 
                href="mailto:chathurasanjeew@gmail.com" 
                className="flex items-center gap-2 hover:text-cv-accent transition-smooth"
              >
                <Mail size={18} />
                chathurasanjeew@gmail.com
              </a>
              <a 
                href="tel:+48889016387" 
                className="flex items-center gap-2 hover:text-cv-accent transition-smooth"
              >
                <Phone size={18} />
                +48 88 901 63 87
              </a>
              <a 
                href="https://www.linkedin.com/in/chathura-rajapakse-014a8345/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cv-accent transition-smooth"
              >
                <Linkedin size={18} />
                LinkedIn Profile
              </a>
              </div>
              
              <div className="flex justify-center lg:justify-start gap-4">
              <Button 
                asChild
                variant="secondary" 
                size="lg"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-smooth"
              >
                <a href="./chathura_rajapakse_resume/docs/cv/chathura-rajapakse-resume.pdf" download>
                <Download size={18} className="mr-2" />
                Download CV
                </a>
              </Button>
              </div>
            </div>
            
            {/* Right side - Photo placeholder */}
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48 border-4 border-white/20">
                <AvatarImage src="./chathura_rajapakse_resume/docs/images/cv-photo.png" alt="Chathura Rajapakse" />
                <AvatarFallback className="text-6xl font-bold bg-white/10 text-white">
                  CR
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;