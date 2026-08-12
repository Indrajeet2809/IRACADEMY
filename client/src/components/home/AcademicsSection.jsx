import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiUsers,
} from "react-icons/fi";

const classes = [
  {
    id: 1,
    level: "Primary",
    classes: "Classes I – V",
    description:
      "Building strong foundations through curiosity, creativity and engaging learning experiences.",
  },
  {
    id: 2,
    level: "Middle School",
    classes: "Classes VI – VIII",
    description:
      "Developing deeper subject knowledge, critical thinking and independent learning skills.",
  },
  {
    id: 3,
    level: "Secondary",
    classes: "Classes IX – X",
    description:
      "Preparing students for academic excellence while developing confidence and responsible thinking.",
  },
  {
    id: 4,
    level: "Senior Secondary",
    classes: "Classes XI – XII",
    description:
      "Supporting students with focused academic preparation and guidance for their future goals.",
  },
];

const AcademicsSection = () => {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">
            Academics
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
            Learning Designed for Every Stage
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Our academic journey is designed to help students build strong
            foundations, discover their interests and prepare confidently for
            the future.
          </p>
        </div>

        {/* Class Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                <FiBookOpen size={22} />
              </div>

              {/* Level */}
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-amber-500">
                {item.level}
              </p>

              {/* Classes */}
              <h3 className="mt-2 text-xl font-bold text-blue-950">
                {item.classes}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {/* Small information */}
              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
                <FiUsers size={16} />

                <span>Academic Programme</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/academics"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-950"
          >
            Explore Academics

            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;