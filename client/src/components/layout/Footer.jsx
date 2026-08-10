import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* School */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-blue-950">
                IR
              </div>

              <div>
                <h2 className="font-bold">IRACADEMY</h2>
                <p className="text-xs text-blue-200">
                  School of Excellence
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-blue-100">
              Empowering students with knowledge, character, confidence, and
              the skills needed to build a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>About Us</li>
              <li>Academics</li>
              <li>Teachers</li>
              <li>Gallery</li>
              <li>Notice Board</li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Academics</h3>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>Classes</li>
              <li>Facilities</li>
              <li>Admissions</li>
              <li>Downloads</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact Us</h3>

            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex gap-3">
                <FiMapPin className="mt-1 shrink-0" />
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>

              <div className="flex gap-3">
                <FiPhone className="mt-1 shrink-0" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FiMail className="mt-1 shrink-0" />
                <span>info@iracademy.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} IRACADEMY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;