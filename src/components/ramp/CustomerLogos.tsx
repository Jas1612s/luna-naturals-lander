const companies = [
  "Stripe",
  "Notion",
  "Discord",
  "Shopify",
  "Visa",
  "Eventbrite",
  "Webflow",
  "Quora",
  "Virgin Voyages",
  "CBRE",
  "Poshmark",
  "Sierra Nevada",
  "GoodRx",
  "Barry's",
  "Opendoor",
  "Zola",
  "Kumon",
  "Anduril",
];

export function CustomerLogos() {
  return (
    <div
      style={{
        backgroundColor: "#F7F7F4",
        borderTop: "1px solid #E4E1DB",
        borderBottom: "1px solid #E4E1DB",
      }}
      className="py-10"
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "1280px" }}
      >
        <p
          className="text-center mb-8"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#8A8A8A",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Trusted by 25,000+ businesses
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
          {companies.map((company) => (
            <span
              key={company}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#C0BCBC",
                letterSpacing: "-0.02em",
              }}
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
