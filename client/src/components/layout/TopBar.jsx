import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="hidden bg-blue-950 text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 transition hover:text-amber-400"
          >
            <FiPhone size={14} />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:info@iracademy.edu.in"
            className="flex items-center gap-2 transition hover:text-amber-400"
          >
            <FiMail size={14} />
            <span>info@iracademy.edu.in</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <FiMapPin size={14} />
          <span>Kanpur, Uttar Pradesh</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;