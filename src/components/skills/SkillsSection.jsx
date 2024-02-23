import { skills } from '../../data';
import SectionTitle from '../SectionTitle';
import SkillsCard from './SkillsCard';

export default function SkillSection() {
  return (
    <section className="align-center py-20" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}
