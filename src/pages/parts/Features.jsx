import { PiKeyboard, PiRuler, PiSliders, PiPackage, PiCode, PiRobot } from 'react-icons/pi'

const features = [
  {
    Icon: PiKeyboard,
    title: "Names you already know",
    desc: "align-items: center is aic, gap is g-24, max-width is maw. Emmet abbreviations, not a dictionary invented for a framework.",
  },
  {
    Icon: PiRuler,
    title: "Values from the design",
    desc: "The mockup says 104px, you write p-t-104. No scale to translate and nothing to configure when a value is not in it.",
  },
  {
    Icon: PiSliders,
    title: "One file to configure",
    desc: "Colours, fonts, container, radius, steps. Every class and component follows from it.",
  },
  {
    Icon: PiPackage,
    title: "Nothing else in the box",
    desc: "React, Rsbuild, Sass. No external grid, no UI library, no runtime. Twelve columns on flexbox and a gap that is one class.",
  },
  {
    Icon: PiCode,
    title: "Markup you can read",
    desc: "Six utilities in 47 characters where a long-form framework needs 150. You read the layout instead of scrolling past it.",
  },
  {
    Icon: PiRobot,
    title: "Agents handle it too",
    desc: "The rules live in AGENTS.md, the classes in docs, and every non-obvious line in a decisions log. An agent extends it without guessing.",
  },
];

const Features = () => {
  return (
    <section id="features" className="p-y-80">
      <div className="container">
        <div className='w-60 wide'>
          <span className='eyebrow'>In the box</span>
          <h2 className="title-section">Six things, nothing else</h2>
        </div>
        <div className="cols-3 g-24 m-t-64">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className='card'>
              <Icon className='icon' aria-hidden='true' />
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
