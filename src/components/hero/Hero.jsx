import heroImg from '../../assets/hero.svg';

export default function Hero() {
  return (
    <section className="py-24">
      <div className="align-center flex flex-column md:flex-row items-center justify-between">
        <article>
          <p className="text-slate-700 mb-3 font-mono tracking-wide">
            $ hello world
          </p>
          <h1 className="text-7xl font-bold">
            {"I'm "}
            <span className="text-violet-600">Lucas</span>
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end developer
          </p>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero img" className="h-60 lg:h-80" />
        </article>
      </div>
    </section>
  );
}
