import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";

const notices = [
  {
    id: 1,
    title: "Admissions Open for Academic Session 2026–27",
    description:
      "Applications are now open for admission to various classes for the upcoming academic session.",
    date: "10 Aug 2026",
    type: "Admission",
    hasPdf: false,
  },
  {
    id: 2,
    title: "Annual Examination Schedule 2026",
    description:
      "Students and parents can download the annual examination schedule from the notice board.",
    date: "08 Aug 2026",
    type: "Examination",
    hasPdf: true,
  },
  {
    id: 3,
    title: "Independence Day Celebration",
    description:
      "The school will celebrate Independence Day with various cultural and educational activities.",
    date: "05 Aug 2026",
    type: "Event",
    hasPdf: false,
  },
];

const NoticeSection = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">
              Stay Updated
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Latest Notices
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Stay informed about important announcements, academic updates,
              events and other notifications from IRACADEMY.
            </p>
          </div>

          <Link
            to="/notices"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-amber-500"
          >
            View All Notices

            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Notices */}
        <div className="mt-10 grid gap-5">
          {notices.map((notice) => (
            <article
              key={notice.id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                  {notice.hasPdf ? (
                    <FiFileText size={23} />
                  ) : (
                    <FiBell size={23} />
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {notice.type}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <FiCalendar size={13} />
                      {notice.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-950">
                    {notice.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {notice.description}
                  </p>
                </div>

                {/* Action */}
                <div className="shrink-0">
                  {notice.hasPdf ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-900 px-4 py-2.5 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
                    >
                      <FiFileText size={16} />
                      View PDF
                    </button>
                  ) : (
                    <Link
                      to="/notices"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-900 hover:text-blue-900"
                    >
                      Read More
                      <FiArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;