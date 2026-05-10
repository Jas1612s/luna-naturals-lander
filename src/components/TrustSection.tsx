const doctors = [
  {
    name: "Dr. Craig Primack, MD",
    title: "Head of Weight Loss, Hims & Hers",
    tags: ["Metabolic Health"],
    bio: "As a nationally recognized obesity specialist, Dr. Primack regularly educates clinicians across the country on evidence-based metabolic and weight-management care.",
    initials: "CP",
  },
  {
    name: "Dr. Peter Stahl, MD",
    title: "Head of Men's Sexual Health & Urology",
    tags: ["Men's Health", "Metabolic Health"],
    bio: "A recognized leader in urology, hormonal health, and complex sexual medicine, Dr. Stahl is expertly attuned to the biological markers that influence energy, sexual function, and metabolic performance in men.",
    initials: "PS",
  },
  {
    name: "Dr. Brian Williams, MD",
    title: "Head of Medical Affairs, Hims & Hers",
    tags: ["Inflammation & Stress", "Liver & Kidney Health", "Immune Defense"],
    bio: "A board-certified family medicine physician with extensive experience in dermatology, Dr. Williams brings years of clinical expertise to the Hims & Hers patient experience.",
    initials: "BW",
  },
  {
    name: "Dr. Alicia Warnock, MD",
    title: "Endocrinology Advisor",
    tags: ["Thyroid Health"],
    bio: "An endocrinologist and former U.S. Navy officer, Dr. Warnock directed the Diabetes Institute at Walter Reed and brings deep expertise in thyroid, metabolic, and endocrine care.",
    initials: "AW",
  },
  {
    name: "Dr. Deepak L. Bhatt, MD",
    title: "Cardiology Advisor",
    tags: ["Heart Health"],
    bio: "One of the world's leading cardiologists, having held leadership roles at top medical programs and received countless awards for clinical innovation, Dr. Bhatt brings exceptional insight into heart health.",
    initials: "DB",
  },
];

export function TrustSection() {
  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="mb-12 px-6 text-center">
        <h2
          className="text-hims-amber-dark"
          style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 400 }}
        >
          The best care
        </h2>
        <h2
          className="text-[rgba(0,0,0,0.88)]"
          style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 400 }}
        >
          by the best in medicine
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[rgba(0,0,0,0.66)]">
          Meet the team of leading specialists with decades of combined experience across key
          specialties.
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="scrollbar-hide flex gap-6 overflow-x-auto px-6 pb-4">
        {doctors.map((doc) => (
          <div key={doc.name} className="w-[280px] flex-shrink-0">
            {/* Card top */}
            <div
              className="mb-4 flex items-center rounded-2xl p-5"
              style={{ backgroundColor: "rgb(245, 240, 232)" }}
            >
              {/* Avatar placeholder */}
              <div
                className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(0,0,0,0.15)] text-xl font-medium text-white"
              >
                {doc.initials}
              </div>
              <div className="ml-4 flex flex-col gap-1.5">
                <p className="text-xs font-medium text-[rgba(0,0,0,0.88)]">{doc.title}</p>
                {doc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="block border-l-[3px] border-hims-amber pl-2 text-xs text-[rgba(0,0,0,0.66)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mb-2 text-lg font-medium text-[rgba(0,0,0,0.88)]">{doc.name}</p>
            <p className="text-sm leading-relaxed text-[rgba(0,0,0,0.66)]">{doc.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
