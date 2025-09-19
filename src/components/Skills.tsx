import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "TypeScript", "Go", "C#", "SQL"],
      icon: "💻"
    },
    {
      title: "Testing Frameworks & Libraries",
      skills: ["Playwright", "Cypress", "Selenium", "Cucumber", "JUnit", "TestNG", "REST Assured", "Allure Reporting", "Newman", "Postman", "WireMock", "Mocha", "Chai", ],
      icon: "🔧"
    },
    {
      title: "Development Tools",
      skills: ["IntelliJ IDEA", "WebStorm", "VS Code", "Xcode", "JMeter", "Appium", "Sauce Labs", "Splunk", "Kibana", "Fiddler", "Honeycomb",  "Swagger", "Docker", "Kubernetes"],
      icon: "🛠️"
    },
    {
      title: "CI/CD & Version Control",
      skills: ["GitLab CI", "Azure DevOps", "Bitbucket", "Bamboo", "GitHub Actions", "Jenkins"],
      icon: "🚀"
    },
    {
      title: "Cloud Platforms (AWS)",
      skills: ["Lambda", "EC2", "ECS Batch", "SNS", "Fraud Detector", "S3 (Data Lake)", "CloudWatch", "IAM", "CloudFormation", "Secrets Manager",  "SQS", "Route 53"],
      icon: "☁️"
    },
    {
      title: "Testing Types",
      skills: ["Functional", "Regression", "Compatibility", "Performance", "Security", "Usability", "Accessibility", "Mobile", "SWIFT Testing", "API Testing", "Cross-Browser Testing", "Component Testing", "Smoke Testing", "Sanity Testing"],
      icon: "✅"
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "macOS", "Linux", "iOS", "Android"],
      icon: "💾"
    },
    {
      title: "Domains",
      skills: ["E-commerce", "CRM", "Financial Services", "Oil & Gas", "Travel & Transport", "Health & Fitness", "Blockchain & Smart Contracts", "Media & Entertainment", "Education", "Telecommunications"],
      icon: "🏢"
    },
    {
      title: "Languages",
      skills: ["Sinhala (Native)", "English (Advanced)", "Russian (Advanced)", "Hindi (Conversational)", "Armenian (Beginner)", "Polish (Beginner)"],
      icon: "🗣️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-cv-surface-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cv-text mb-12 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 shadow-medium gradient-card border-0 transition-smooth hover:shadow-strong hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-semibold text-cv-text">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-cv-primary/10 text-cv-primary hover:bg-cv-primary hover:text-white transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-6 shadow-medium gradient-card border-0">
            <h3 className="font-semibold text-cv-text mb-4 text-lg flex items-center gap-2">
              <span>🎯</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Team Management", "Leadership", "Mentoring & Coaching", "Conflict Resolution", 
                "Decision Making", "Stakeholder Communication", "Release Planning", 
                "Sprint Coordination", "Problem Solving", "Adaptability", "Team Motivation", 
                "Time Management", "Critical Thinking", "Collaboration", "Mentorship"
              ].map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-cv-accent text-cv-accent hover:bg-cv-accent hover:text-white transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;