import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiUser,
} from "react-icons/fi";

const teachers = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    designation: "Principal",
    subject: "Educational Leadership",
    initials: "AS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    designation: "Senior Faculty",
    subject: "Mathematics",
    initials: "RV",
  },
  {
    id: 3,
    name: "Priya Singh",
    designation: "Senior Faculty",
    subject: "Science",
    initials: "PS",
  },
  {
    id: 4,
    name: "Amit Kumar",
    designation: "Faculty",
    subject: "English",
    initials: "AK",
  },
];

const TeachersSection = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">
              Our Faculty
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Meet Our Dedicated Educators
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our faculty members are committed to creating a supportive
              learning environment where every student can grow and succeed.
            </p>
          </div>

          <Link
            to="/teachers"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-amber-500"
          >
            View All Faculty

            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Teacher Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <article
              key={teacher.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Teacher Image Placeholder */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 to-blue-950">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white ring-4 ring-white/10">
                  {teacher.initials}
                </div>

                {/* Small Icon */}
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-lg">
                  <FiUser size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-950">
                  {teacher.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-amber-500">
                  {teacher.designation}
                </p>

                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
                  <FiBookOpen size={16} className="text-blue-900" />
                  <span>{teacher.subject}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;