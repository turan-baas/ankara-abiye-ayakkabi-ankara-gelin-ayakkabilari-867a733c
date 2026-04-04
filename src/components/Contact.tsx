"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="iletisim"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--color-surface)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Contact Info & Form */}
          <div className="scroll-reveal">
            <span
              className="text-[0.8rem] uppercase tracking-[0.2em] font-semibold mb-4 block"
              style={{ color: "var(--color-accent)" }}
            >
              İletişim
            </span>
            <h2
              className="font-heading font-semibold leading-tight mb-10"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              Bize Ulaşın
            </h2>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <a
                href="tel:+905059032146"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: "rgba(232,168,56,0.1)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm font-medium mb-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Telefon
                  </p>
                  <p
                    className="font-semibold group-hover:underline"
                    style={{ color: "var(--color-text)" }}
                  >
                    +90 505 903 21 46
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(232,168,56,0.1)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm font-medium mb-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Adres
                  </p>
                  <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                    Kızılay, İzmir-1 Cd. 29/3, 06420 Çankaya/Ankara
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kızılay+İzmir-1+Cd.+29/3+06420+Çankaya+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Google Maps&apos;te Aç
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full px-5 py-3.5 rounded-xl border text-sm transition-all duration-300 outline-none"
                  style={{
                    borderColor: "rgba(0,0,0,0.1)",
                    backgroundColor: "var(--color-white)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232,168,56,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-5 py-3.5 rounded-xl border text-sm transition-all duration-300 outline-none"
                  style={{
                    borderColor: "rgba(0,0,0,0.1)",
                    backgroundColor: "var(--color-white)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232,168,56,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Mesajınız"
                  className="w-full px-5 py-3.5 rounded-xl border text-sm transition-all duration-300 outline-none resize-none"
                  style={{
                    borderColor: "rgba(0,0,0,0.1)",
                    backgroundColor: "var(--color-white)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232,168,56,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                type="submit"
                className="rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-white)",
                }}
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Right - Map placeholder */}
          <div className="scroll-reveal stagger-2">
            <div
              className="relative rounded-2xl overflow-hidden h-full min-h-[500px] border-2"
              style={{
                backgroundColor: "var(--color-primary)",
                borderColor: "var(--color-accent)",
              }}
            >
              {/* Stylized map pattern */}
              <div className="absolute inset-0 opacity-[0.06]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Map pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* Pulse ring */}
                  <div
                    className="absolute left-1/2 top-[calc(50%-8px)] -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-20"
                    style={{
                      border: "2px solid var(--color-accent)",
                      animation: "float 3s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>

              {/* Address overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(45,45,45,0.95), transparent)",
                }}
              >
                <p
                  className="font-heading font-semibold text-lg mb-1"
                  style={{ color: "var(--color-white)" }}
                >
                  Ankara Abiye Ayakkabı
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Kızılay, İzmir-1 Cd. 29/3, 06420 Çankaya/Ankara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
