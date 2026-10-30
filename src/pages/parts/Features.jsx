const features = [
  {
    title: "Names you already know",
    desc: "align-items: center is aic, gap is g-24, max-width is maw. The abbreviations come from the Emmet dictionary, so there is no second vocabulary to learn.",
  },
  {
    title: "Values from the design",
    desc: "You see 104px in the mockup, you write p-t-104. No scale to translate, no token to invent, and nothing blocking you when a value is not in the scale.",
  },
  {
    title: "One file to configure",
    desc: "Colours, fonts, container width and corner radius live in one variables file. Every class and component follows from it.",
  },
  {
    title: "Nothing else in the box",
    desc: "React, Rsbuild and Sass. No external grid, no UI library, no runtime. Twelve columns on flexbox, and a gap that is one class.",
  },
  {
    title: "Readable markup",
    desc: "Six utilities fit in 47 characters where a long-form framework needs 150. Short enough to read the layout straight from the className.",
  },
  {
    title: "Made for agents too",
    desc: "Rules live in AGENTS.md, the class reference in docs, and every non-obvious declaration is explained in a decisions log. An agent can extend the system without breaking it.",
  },
];

const Features = () => {
  return (
    <section id="features" className="p-y-160">
      <div className="container tc">
        <h2 className="title-section">What you get</h2>
        <div className="cols-3 g-40 m-t-64 tl">
          {features.map(({ title, desc }) => (
            <div key={title}>
              <h3 className="title-card">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
