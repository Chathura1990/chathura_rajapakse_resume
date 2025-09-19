import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import Summary from '@/components/Summary';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default Index;
