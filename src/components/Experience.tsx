import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "EPAM Systems",
      companyUrl: "https://www.epam.com/",
      position: "QA Team Lead & Release Manager",
      location: "Krakow, Poland",
      period: "2023 – Present",
      description: [
        "Plan and maintain release schedules to ensure timely delivery",
        "Coordinate development, testing, and operations teams for seamless collaboration",
        "Identify and mitigate risks associated with releases",
        "Prepare comprehensive release notes and deployment plans",
        "Provide status updates and resolve issues effectively",
        "Manage development, testing, staging, and production environments",
        "Oversee deployment processes and validate post-deployment outcomes",
        "Conduct post-release reviews to drive continuous improvement",
        "Utilize release management tools and software efficiently"
      ],
      current: true
    },
    {
      company: "EPAM Systems",
      companyUrl: "https://www.epam.com/",
      position: "Senior Software Development Engineer in Test",
      location: "Krakow, Poland", 
      period: "2021 – 2023",
      description: [
        "Leading and coordinating a high-performing QA team",
        "Designing and writing test automation scripts",
        "Collaborate with engineering team members to communicate any identified bug fixes needed for the product",
        "Work with Amazon web services (Fraud detector, Lambda, EC2 and CloudWatch, Data Lake, S3 bucket)",
        "Participate in reviews of business requirements",
        "API testing, security testing and performance testing"
      ]
    },
    {
      company: "Godel Technologies Europe",
      companyUrl: "https://www.godeltech.com/",
      position: "Software Development Engineer in Test",
      location: "Gomel, Belarus",
      period: "2019 - 2021", 
      description: [
        "Talent Manager (Resource Manager) & Mentor",
        "Designing and writing test automation scripts, including the estimation of effort required to complete testing activities",
        "Code Review",
        "Check / Review QA artifacts",
        "Choose the best tools and framework for the project",
        "Organize test suites for functional testing",
        "Participate in reviews of business requirements",
        "API testing (SOAP, REST, REST Assured)"
      ]
    },
    {
      company: "IT Support Me",
      companyUrl: "https://itsm.by/",
      position: "Software Test Automation Engineer", 
      location: "Gomel, Belarus",
      period: "2017 - 2019",
      description: [
        "Designing and writing test automation scripts, including the estimation of effort required to complete testing activities",
        "Collaborate with engineering team members to communicate any identified bug fixes needed for the product",
        "Check / Review QA artifacts",
        "Configure Linux server to install Jenkins on Amazon Web services or Azure DevOps",
        "Choose the best tools and framework for the project",
        "Configure and optimize the CI/CD pipelines",
        "Organize test suites for functional testing", 
        "Participate in reviews of business requirements",
        "Automation team management",
        "API testing (SOAP, REST, REST Assured)",
        "Sauce labs integration (cross-browser testing)"
      ]
    },
    {
      company: "LAK View Broadcasting Company Pvt. Ltd",
      companyUrl: "https://www.lakfm.lk/",
      position: "System Administrator",
      location: "Colombo,Sri Lanka",
      period: "2011 - 2012",
      description: [
        "Update songs and programs in database",
        "Update website details and bug fixing", 
        "Performed regular backups and restored information if necessary",
        "Solved problems connected to the network and the systems",
        "Educated company employees about computer security",
        "Monitored the storage capabilities of the system"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-cv-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-cv-text mb-12 text-center">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 shadow-medium gradient-card border-0 transition-smooth hover:shadow-strong">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cv-primary mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-cv-text mb-2">
                      <Building size={18} />
                      <span className="font-semibold text-lg">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-cv-primary"
                        >
                          {exp.company}
                        </a>
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-cv-text-light">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-cv-accent text-white">
                      Current Position
                    </Badge>
                  )}
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-cv-text-light">
                      <div className="w-2 h-2 bg-cv-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;