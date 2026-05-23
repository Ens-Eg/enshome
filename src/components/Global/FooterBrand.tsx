type FooterBrandProps = {
  variant?: "default" | "white";
};

/** Server-safe footer logo (avoids pulling client Logo + react-icons into the homepage). */
export default function FooterBrand({ variant = "white" }: FooterBrandProps) {
  const gradientClasses =
    variant === "white"
      ? "bg-gradient-to-r from-gray-200 via-white to-gray-200"
      : "bg-gradient-to-r from-slate-900 via-purple-600 to-slate-900 dark:from-white dark:via-purple-400 dark:to-white";

  const iconClasses =
    variant === "white" ? "text-white" : "text-purple-600 dark:text-purple-400";

  const lineClasses =
    variant === "white"
      ? "bg-white opacity-60 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      : "bg-purple-600 shadow-[0_0_10px_rgba(124,58,237,0.5)] dark:bg-purple-400 opacity-40";

  return (
    <div className="flex items-center gap-4">
      <svg
        className={iconClasses}
        width={40}
        height={40}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm13 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h3v3h-3v-3zm-2 2h1v1h-1v-1z" />
      </svg>
      <div className="relative flex flex-col items-center">
        <div
          className={`text-2xl font-black tracking-tighter bg-clip-text text-transparent lg:text-xl xl:text-3xl ${gradientClasses}`}
        >
          ENSMENU
        </div>
        <div className={`mt-[-2px] h-1 w-full rounded-full ${lineClasses}`} />
      </div>
    </div>
  );
}
