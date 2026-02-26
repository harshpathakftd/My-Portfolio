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
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Harsh Pathak, a professional software and web developer with a passion for creating visually striking and highly functional websites. By blending creativity with technical expertise, I transform ideas into digital masterpieces that stand out both in design and performance. Whether it’s building responsive websites, crafting seamless user experiences, or developing innovative web solutions, I ensure that every project I work on exceeds expectations.
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