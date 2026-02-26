/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from "prop-types";


const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-4 rounded-2xl p-4 ring-1 ring-zinc-700/50 bg-zinc-800/30 hover:bg-zinc-800/60 hover:ring-sky-400/30 transition-all duration-300 group " +
        (classes || "")
      }
    >
      <figure className="shrink-0 w-12 h-12 rounded-xl bg-zinc-700/50 flex items-center justify-center p-2 ring-1 ring-zinc-600/30 group-hover:ring-sky-400/40 transition-all duration-300">
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
          className="object-contain w-8 h-8"
        />
      </figure>
      <div className="min-w-0">
        <h3 className="font-semibold text-zinc-100 truncate">{label}</h3>
        <p className="text-zinc-500 text-sm mt-0.5">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard