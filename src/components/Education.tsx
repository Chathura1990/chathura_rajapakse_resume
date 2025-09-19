import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Gomel State Technical University Named After Sukhoi",
      location: "Gomel, Belarus",
      period: "2012 - 2017",
      degree: "Bachelor's Degree in Computer Science",
      details: ["1-year Russian Language Course", "Degree completed in Russian medium"],
      type: "university"
    },
    {
      institution: "National Institute of Business Management", 
      location: "Colombo, Sri Lanka",
      period: "2010 - 2011",
      degree: "Diploma in Information Technology Systems",
      details: ["Completed in English medium", "A sub-course from Dublin University in Ireland"],
      type: "diploma"
    },
    {
      institution: "Nalanda College",
      location: "Colombo, Sri Lanka", 
      period: "2007 – 2009",
      degree: "Advanced Level Examination",
      details: ["Mathematics - Pass", "English - Pass", "Science and Technology - Pass", "Business Studies - Pass", "Geography - Pass", "Physical Education - Pass"],
      type: "school"
    }
  ];

  const additionalEducation = [
    "University practical – EPAM systems",
    "Training – IBM Cognos", 
    "University practical – IBA group",
    "Splunk power user training",
    "Courses in Adobe Photoshop, Adobe Premiere, Adobe Illustrator, Adobe After Effects, Davinci resolve"
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'university': return <GraduationCap size={24} className="text-cv-primary" />;
      case 'diploma': return <Award size={24} className="text-cv-accent" />;
      case 'school': return <BookOpen size={24} className="text-cv-primary-light" />;
      default: return <GraduationCap size={24} className="text-cv-primary" />;
    }
  };

  return (
    <section id="education" className="py-20 bg-cv-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-cv-text mb-12 text-center">
            Education & Training
          </h2>
          
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <Card key={index} className="p-8 shadow-medium gradient-card border-0 transition-smooth hover:shadow-strong">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getIcon(edu.type)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-cv-primary mb-2">
                          {edu.degree}
                        </h3>
                        <div className="text-lg font-semibold text-cv-text mb-1">
                          {edu.institution}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-cv-text-light">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {edu.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cv-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-cv-text-light">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 shadow-medium gradient-card border-0">
            <h3 className="text-2xl font-bold text-cv-primary mb-6 flex items-center gap-3">
              <Award size={24} />
              Additional Education & Training
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalEducation.map((course, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cv-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-cv-text-light">{course}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mt-8 p-6 text-center shadow-soft gradient-card border-0">
            <h4 className="font-semibold text-cv-text mb-2">References</h4>
            <p className="text-cv-text-light">Available upon request</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;