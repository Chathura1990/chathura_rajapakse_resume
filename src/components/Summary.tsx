import { Card } from '@/components/ui/card';

const Summary = () => {
  return (
    <section id="summary" className="py-20 bg-cv-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-cv-text mb-12 text-center">
            Professional Summary
          </h2>
          
          <Card className="p-8 shadow-medium gradient-card border-0">
            <p className="text-lg leading-relaxed text-cv-text-light">
              As a <span className="font-semibold text-cv-primary">QA Team Lead at EPAM Systems</span>, I bring over 
              <span className="font-semibold text-cv-primary"> 9 years of experience</span> in Information Technology, 
              including more than 4 years of expertise in leading quality assurance efforts and delivering robust test 
              automation solutions. My expertise spans <span className="font-semibold">TypeScript, Java, Playwright, 
              Selenium, Cypress, and BDD methodologies</span>, with a focus on ensuring functional and non-functional 
              requirements are met across diverse projects. I collaborate with teams to design, execute, and document 
              test scenarios, driving seamless integration of testing processes.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center shadow-soft gradient-card border-0 transition-smooth hover:shadow-medium">
              <div className="text-3xl font-bold text-cv-primary mb-2">9+</div>
              <div className="text-cv-text-light">Years of Experience</div>
            </Card>
            
            <Card className="p-6 text-center shadow-soft gradient-card border-0 transition-smooth hover:shadow-medium">
              <div className="text-3xl font-bold text-cv-primary mb-2">4+</div>
              <div className="text-cv-text-light">Years Leading QA Teams</div>
            </Card>
            
            <Card className="p-6 text-center shadow-soft gradient-card border-0 transition-smooth hover:shadow-medium">
              <div className="text-3xl font-bold text-cv-primary mb-2">5</div>
              <div className="text-cv-text-light">Programming Languages</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;