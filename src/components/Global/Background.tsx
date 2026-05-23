export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
        }}
      >
        <div className="absolute inset-0" />
      </div>

      {[...Array(4)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute h-[400px] w-[400px] rounded-full opacity-[0.1] max-lg:blur-none lg:blur-[140px] dark:opacity-[0.15]"
        />
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white dark:from-[#0d1117] to-transparent" />
    </div>
  );
}
