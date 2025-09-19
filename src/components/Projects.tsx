import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Fnality",
      description: "Distributed Ledger Technology (DLT) - based wholesale payment system in UK. A fintech infrastructure firm operating a blockchain-based, regulated wholesale payment system (£FnPS) with Bank of England endorsement for settlement finality.",
      tags: ["Blockchain", "DLT", "Financial Services", "UK", "Fintech"],
      category: "Financial Technology"
    },
    {
      name: "Investment Management Platform",
      description: "An investment management company in USA. Mission is to help investors reach their financial goals by providing low-cost, fair, and long-term-focused investing options with four guiding principles for investment success.",
      tags: ["Investment", "Financial Services", "USA", "Portfolio Management"],
      category: "Investment Management"
    },
    {
      name: "Pinnacle Pet Group",
      description: "Pet insurance service provider in UK offering products and services under their own brands to support pet owners facing unexpected illnesses or diseases with a philosophical 'vision' for pet insurance.",
      tags: ["Insurance", "Pet Care", "UK", "Healthcare"],
      category: "Insurance"
    },
    {
      name: "Shell Energy (UK)",
      description: "Formerly a home energy and broadband provider in UK. Originally known as First Utility and rebranded to Shell Energy in 2019. This division supplied 100% renewable electricity and also offered gas and broadband services.",
      tags: ["Energy", "Renewable", "Broadband", "UK", "Utilities"],
      category: "Energy & Utilities"
    },
    {
      name: "Fitspot",
      description: "A personal training mobile app. A comprehensive fitness platform that allows you to find your Fit spot. Whether you want to move more, move better, go easy, go hard, or anything in between.",
      tags: ["Mobile App", "Fitness", "Health", "Personal Training"],
      category: "Health & Fitness"
    },
    {
      name: "Salesforce (Flosum)",
      description: "A CRM system for Flosum project in USA. Flosum is a complete end-to-end solution including built-in merge tools, version control, continuous deployments, static code analysis, user story management & regression testing tools.",
      tags: ["CRM", "Salesforce", "DevOps", "USA", "Enterprise"],
      category: "CRM & Enterprise"
    },
    {
      name: "LendPro",
      description: "A Consumer Financing System in Canada. The fastest, easiest, and most powerful solution for retailers to offer credit from multiple lenders to customers in one simple application process.",
      tags: ["Finance", "Lending", "Canada", "Retail", "Credit"],
      category: "Financial Services"
    },
    {
      name: "Global Healthcare Management",
      description: "A web solution system for selling pharmacy drugs in the USA. Custom web application developed for companies that supply durable medical equipment and medicines for diabetics testing. Currently used by more than 40 USA healthcare companies.",
      tags: ["Healthcare", "Pharmacy", "Medical Equipment", "USA", "Web Application"],
      category: "Healthcare"
    },
    {
      name: "ITSM Portal",
      description: "A web solution system to store employee information. Internal web-based business software application that allows centralized storage of employees' data, provides the possibility to manage business processes related to company staff.",
      tags: ["ITSM", "Employee Management", "Web Application", "Business Process"],
      category: "Enterprise Software"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cv-surface-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cv-text mb-12 text-center">
            Project & Product Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 shadow-medium gradient-card border-0 transition-smooth hover:shadow-strong hover:-translate-y-1 flex flex-col h-full">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-cv-primary text-lg leading-tight">
                    {project.name}
                  </h3>
                  <ExternalLink size={16} className="text-cv-text-light flex-shrink-0 mt-1" />
                </div>
                
                <Badge variant="secondary" className="mb-3 w-fit bg-cv-accent/10 text-cv-accent">
                  {project.category}
                </Badge>
                
                <p className="text-cv-text-light text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-cv-primary/30 text-cv-primary hover:bg-cv-primary hover:text-white transition-smooth"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;