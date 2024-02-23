import aboutImg from '../../assets/about.svg';
import SectionTitle from '../SectionTitle';

export default function About() {
  return (
    <section className="py-20" id="about">
      <div className="align-center grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="personal info svg" className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            My name is Lucas Santos, i'm a 22 years old programmer based in Sao
            Paulo, Brazil with a passion for creating interactive and responsive
            web applications. Currently im looking to expand my knowledge and
            skills with a focus on the React Ecosystem. Got some opportunities
            for me? Get in contact.
          </p>
        </article>
      </div>
    </section>
  );
}
