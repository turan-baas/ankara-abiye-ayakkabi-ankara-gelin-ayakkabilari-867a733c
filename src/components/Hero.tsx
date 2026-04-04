"use client";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Background lifestyle photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,20,20,0.82) 0%, rgba(20,20,20,0.65) 50%, rgba(20,20,20,0.75) 100%)",
          }}
        />
        {/* Subtle accent gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(232,168,56,0.08), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-[0.75rem] uppercase tracking-[0.2em] font-medium border"
            style={{
              color: "var(--color-accent)",
              borderColor: "rgba(232,168,56,0.3)",
            }}
          >
            Ankara Kızılay
          </div>
          <h1
            className="font-heading font-bold leading-[1.05] mb-8"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5rem)",
              letterSpacing: "-0.04em",
              color: "var(--color-white)",
            }}
          >
            Ankara Abiye
            <br />
            <span style={{ color: "var(--color-accent)" }}>Ayakkabı</span>
          </h1>
          <p
            className="text-lg lg:text-xl max-w-xl mb-12 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Gelin ayakkabıları ve abiye ayakkabı koleksiyonumuzla
            hayatınızın en özel anlarına zarif bir dokunuş katıyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#hizmetler"
              className="rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-white)",
              }}
            >
              Koleksiyonu Keşfet
            </a>
            <a
              href="#hakkimizda"
              className="rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium border transition-all duration-300 hover:scale-[1.03]"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Hikayemiz
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, var(--color-bg), transparent)`,
        }}
      />
    </section>
  );
}
