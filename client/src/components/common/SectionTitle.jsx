const SectionTitle = ({
  eyebrow,
  title,
  description,
  centered = true,
}) => {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-blue-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;