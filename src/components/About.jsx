/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 3
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section section-line"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ring-1 ring-zinc-700/50 transition-shadow duration-300 hover:ring-zinc-600/50 hover:shadow-xl hover:shadow-black/20">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I&apos;m Harsh Pathak — a <strong className="text-zinc-200">DevOps Engineer</strong> with a solid <strong className="text-zinc-200">Full Stack</strong> background. My focus is on cloud infrastructure, CI/CD pipelines, Kubernetes, and automation so teams can ship faster and more reliably. I also build and maintain web applications when the project needs end-to-end ownership. I&apos;m moving deeper into DevOps (infrastructure as code, monitoring, scalability) while keeping my Full Stack skills sharp for full-cycle delivery.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About