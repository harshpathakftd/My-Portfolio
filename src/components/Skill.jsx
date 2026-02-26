/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/html.png',
    label: 'HTML',
    desc: 'Markup'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/bootstrap.png',
    label: 'Bootstrap',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/npm.png',
    label: 'NPM',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/java.png',
    label: 'JAVA',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/Spring_Boot.png',
    label: 'Spring Boot',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/hibernate.png',
    label: 'Hibernate',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/maven.png',
    label: 'Maven',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/sql.png',
    label: 'SQL',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/oracle.png',
    label: 'Oracle',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/postgre.png',
    label: 'Postgre SQL',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/mongo.png',
    label: 'Mongo DB',
    desc: 'Framework'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill