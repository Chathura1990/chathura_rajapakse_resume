import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cv-text text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-white/80 mb-6">
              Ready to bring quality and innovation to your next project? Let's connect!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
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
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-cv-accent" /> by Chathura Rajapakse
            </p>
            <p className="text-white/40 text-sm mt-2">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;