import SectionTitle from '../SectionTitle';
import ProjectsCard from './ProjectsCard';
import { useFetchProjects } from '../../fetchProjects';

export default function ProjectsSection() {
  const { loading, projects } = useFetchProjects();

  return (
    <section className="py-20 align-center" id="projects">
      <SectionTitle text="projects" />
      {loading ? (
        <div className="flex align-center justify-center p-8">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid py-16 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((item) => {
            return <ProjectsCard key={item.id} {...item} />;
          })}
        </div>
      )}
    </section>
  );
}
