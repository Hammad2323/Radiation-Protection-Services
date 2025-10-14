export default function ImagingHeader({ title, subtitle, bgImage }) {
  return (
    <section
      className="relative w-full h-[40vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage || "/header-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3 drop-shadow-lg">
          {title.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === 0 ? "text-[#FFA500]" : "text-white ml-2"}
            >
              {word}
            </span>
          ))}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-[#D1E8FF] font-medium drop-shadow-md max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
