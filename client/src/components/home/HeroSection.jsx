import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiBookOpen,
} from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/60" />

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Admissions Open for 2026–27
          </div>

          {/* Heading */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Welcome to IRACADEMY
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Inspiring Minds.
            <span className="block text-amber-400">
              Building Futures.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
            We believe education is more than academics. At IRACADEMY,
            we nurture knowledge, character, confidence and creativity
            to prepare students for a brighter future.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600 hover:shadow-xl"
            >
              Explore Our School

              <FiArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-blue-950"
            >
              <FiBookOpen size={18} />
              Admissions
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <FiCheckCircle className="text-amber-400" />
              Quality Education
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100">
              <FiCheckCircle className="text-amber-400" />
              Experienced Faculty
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100">
              <FiCheckCircle className="text-amber-400" />
              Holistic Development
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-blue-800 to-blue-950 shadow-2xl">
            {/* Decorative School Illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-white/10 text-5xl font-bold text-white shadow-xl backdrop-blur">
                  IR
                </div>

                <p className="text-xl font-semibold text-white">
                  IRACADEMY
                </p>

                <p className="mt-2 text-sm text-blue-200">
                  School of Excellence
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-400/20 blur-2xl" />

            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-widest text-blue-200">
                Our Vision
              </p>

              <p className="mt-2 text-sm leading-6 text-white">
                Creating confident learners who are ready to make a
                positive difference in the world.
              </p>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -left-8 top-12 rounded-2xl border border-white/20 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FiBookOpen size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-blue-950">
                  Learn & Grow
                </p>

                <p className="text-xs text-slate-500">
                  Every single day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-50 [clip-path:ellipse(55%_100%_at_50%_100%)]" />
    </section>
  );
};

export default HeroSection;