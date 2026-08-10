import {
  FiBookOpen,
  FiUsers,
  FiCpu,
  FiAward,
} from "react-icons/fi";

import SectionTitle from "../common/SectionTitle";

const highlights = [
  {
    icon: FiBookOpen,
    title: "Quality Education",
    description:
      "A learning environment focused on strong academic foundations and meaningful understanding.",
  },
  {
    icon: FiUsers,
    title: "Experienced Faculty",
    description:
      "Dedicated educators who encourage students to learn, explore and develop confidence.",
  },
  {
    icon: FiCpu,
    title: "Smart Learning",
    description:
      "Modern teaching approaches that make learning engaging, practical and future-ready.",
  },
  {
    icon: FiAward,
    title: "Holistic Development",
    description:
      "We encourage academic growth alongside creativity, communication, discipline and character.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Why Choose IRACADEMY"
          title="Building Strong Foundations for a Brighter Future"
          description="We create an environment where students can learn with confidence, discover their potential and prepare themselves for the future."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-800 transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white">
                  <Icon size={25} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-blue-950">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;