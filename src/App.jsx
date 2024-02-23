import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import SkillsSection from './components/skills/SkillsSection';
import About from './components/about/About';
import ProjectsSection from './components/projects/ProjectsSection';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';

export default function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Hero />
      <SkillsSection />
      <About />
      <ProjectsSection />
      <Footer />
    </>
  );
}
