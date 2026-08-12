import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
} from "react-icons/fi";

import SectionTitle from "../common/SectionTitle";

const AboutSection = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        
        {/* Left - Image / Visual */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 shadow-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
              
              {/* Temporary Demo Visual */}
              <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-3xl font-bold text-blue-900 shadow-xl">
                  IR
                </div>

                <p className="mt-6 text-2xl font-bold text-white">
                  IRACADEMY
                </p>

                <p className="mt-2 text-sm tracking-wider text-blue-200">
                  SCHOOL OF EXCELLENCE
                </p>
              </div>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Experience / Trust Card */}
          <div className="absolute -bottom-7 -right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:-right-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FiTarget size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-blue-950">
                  Learning With Purpose
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Knowledge • Character • Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -left-5 -top-5 -z-10 h-24 w-24 rounded-2xl bg-amber-100" />
        </div>

        {/* Right - Content */}
        <div>
          <SectionTitle
            eyebrow="About IRACADEMY"
            title="Where Learning Becomes a Foundation for Life"
            description="IRACADEMY is committed to creating a supportive and inspiring environment where students can develop academically, personally and socially."
            centered={false}
          />

          <p className="mt-6 text-base leading-7 text-slate-600">
            Our approach goes beyond textbooks and examinations. We believe
            students learn best when they are encouraged to ask questions,
            explore ideas, build confidence and develop a strong sense of
            responsibility.
          </p>

          {/* Mission / Vision */}
          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                <FiCheckCircle size={15} />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Our Mission
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  To provide meaningful education that develops knowledge,
                  confidence, discipline and lifelong learning habits.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                <FiCheckCircle size={15} />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Our Vision
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  To nurture responsible, confident and capable individuals
                  who are prepared to make a positive contribution to society.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-950"
            >
              Learn More About Us

              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;