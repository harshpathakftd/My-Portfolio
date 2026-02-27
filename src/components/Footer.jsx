/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact me", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/harshpathakftd" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshpathakftp" },
  { label: "Gmail", href: "mailto:harshpathakftd@gmail.com" },
];


const Footer = () => {
  return (
    <footer className="section section-line">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[14ch] reveal-up">
              Let&apos;s build something reliable
            </h2>

            <ButtonPrimary
              href="mailto:harshpathakftd@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-all duration-200 hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-all duration-200 hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up inline-block transition-transform duration-300 hover:scale-105">
            <img src="/images/logo.png" width={50} height={40} alt="Portfolio" />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">harshpathakftd</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer