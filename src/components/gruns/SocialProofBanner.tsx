const avatars = [
  "/images/gruns/Gruns-Social-Images-03.webp",
  "/images/gruns/Gruns-Social-Images-08.webp",
  "/images/gruns/Gruns-Social-Images-09.webp",
];

export function SocialProofBanner() {
  return (
    <div className="bg-[var(--gr-green-dark)] py-4 px-4 md:px-6">
      <div className="max-w-[600px] mx-auto flex items-center justify-center gap-3">
        {/* Stacked avatars */}
        <div className="flex -space-x-2.5">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-[var(--gr-green-dark)] object-cover"
            />
          ))}
        </div>

        <p className="text-sm text-white">
          <span className="font-bold">Sarah</span>
          <svg className="inline-block w-4 h-4 ml-0.5 -mt-0.5" viewBox="0 0 24 24" fill="var(--gr-accent)">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span className="text-white/60 ml-1">and 100,000+ others switched</span>
        </p>
      </div>
    </div>
  );
}
