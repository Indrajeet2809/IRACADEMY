import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

const PrincipalMessage = () => {
  return (
    <section className="bg-slate-50 px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 px-7 py-9 shadow-xl sm:px-10 lg:px-14 lg:py-12">
          
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-700/30 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative grid items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            
            {/* Principal Image */}
            <div className="mx-auto lg:mx-0">
              <div className="relative">
                <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-3xl border-4 border-white/10 bg-gradient-to-br from-blue-700 to-blue-900 shadow-2xl sm:h-64 sm:w-64">
                  
                  {/* Temporary Demo Placeholder */}
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white">
                      PR
                    </div>

                    <p className="mt-4 text-sm font-medium text-blue-200">
                      Principal
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="absolute -bottom-4 -right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">
                  <FiMessageCircle size={24} />
                </div>
              </div>

              {/* Principal Details */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-xl font-bold text-white">
                  Dr. Ananya Sharma
                </h3>

                <p className="mt-1 text-sm text-blue-200">
                  Principal, IRACADEMY
                </p>
              </div>
            </div>

            {/* Message */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
                Principal's Message
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Education That Inspires,
                <span className="block text-amber-400">
                  Empowers & Transforms
                </span>
              </h2>

              <div className="mt-5 space-y-3 text-base leading-7 text-blue-100 sm:text-lg">
                <p>
                  At IRACADEMY, we believe that every child has unique
                  potential waiting to be discovered. Our responsibility is
                  to provide the right environment, guidance and encouragement
                  for that potential to flourish.
                </p>

                <p>
                  Education is not limited to textbooks and examinations.
                  We strive to develop curiosity, confidence, discipline,
                  compassion and the ability to think independently.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-serif text-2xl italic text-white">
                  Dr. Ananya Sharma
                </p>

                <p className="mt-1 text-sm text-blue-300">
                  Principal, IRACADEMY
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <a
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-amber-400"
                >
                  Learn More About Our Philosophy

                  <FiArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;