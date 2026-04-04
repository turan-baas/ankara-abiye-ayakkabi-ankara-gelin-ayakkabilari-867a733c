export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left - Brand */}
          <div>
            <p
              className="font-heading text-2xl font-bold mb-4"
              style={{ color: "var(--color-white)" }}
            >
              Ankara{" "}
              <span style={{ color: "var(--color-accent)" }}>Abiye</span>
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Gelin ayakkabıları ve abiye ayakkabı koleksiyonumuzla
              hayatınızın en özel anlarına zarif bir dokunuş katıyoruz.
            </p>
          </div>

          {/* Center - Nav links */}
          <div>
            <p
              className="text-[0.75rem] uppercase tracking-[0.2em] font-semibold mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Hızlı Bağlantılar
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#anasayfa", label: "Ana Sayfa" },
                { href: "#hakkimizda", label: "Hakkımızda" },
                { href: "#hizmetler", label: "Hizmetler" },
                { href: "#yorumlar", label: "Yorumlar" },
                { href: "#iletisim", label: "İletişim" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-300 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right - Contact */}
          <div>
            <p
              className="text-[0.75rem] uppercase tracking-[0.2em] font-semibold mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              İletişim Bilgileri
            </p>
            <div className="space-y-4">
              <a
                href="tel:+905059032146"
                className="flex items-center gap-3 text-sm transition-colors duration-300 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <svg
                  className="w-4 h-4 shrink-0"
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
                +90 505 903 21 46
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
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
                Kızılay, İzmir-1 Cd. 29/3, 06420 Çankaya/Ankara
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            &copy; 2026 Ankara Abiye Ayakkabı | ANKARA GELİN AYAKKABILARI. Tüm
            hakları saklıdır.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Kızılay, Ankara
          </p>
        </div>
      </div>
    </footer>
  );
}
