"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Gelin Ayakkabıları",
    description:
      "Düğün gününüzü taçlandıracak, zarif ve konforlu gelin ayakkabısı koleksiyonumuzla hayalinizdeki modeli bulun. Klasik beyazdan modern tonlara kadar geniş seçenekler sunuyoruz.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Zarif beyaz gelin ayakkabısı",
  },
  {
    title: "Abiye Ayakkabılar",
    description:
      "Özel geceleriniz ve davetler için tasarlanmış abiye ayakkabı modellerimizle göz kamaştırın. Topuklu, platform ve şık düz modeller arasından size en uygun olanı seçin.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Şık abiye topuklu ayakkabı",
  },
  {
    title: "Kişisel Danışmanlık",
    description:
      "Ayak yapınıza ve stilinize en uygun modeli bulmanız için uzman ekibimiz size özel danışmanlık hizmeti sunar. Randevu alarak size özel bir alışveriş deneyimi yaşayın.",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Ayakkabı mağazasında kişisel danışmanlık",
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section
      id="hizmetler"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--color-surface)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <span
            className="text-[0.8rem] uppercase tracking-[0.2em] font-semibold mb-4 block"
            style={{ color: "var(--color-accent)" }}
          >
            Hizmetler
          </span>
          <h2
            className="font-heading font-semibold leading-tight max-w-2xl mx-auto"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
            }}
          >
            Her Özel Anınız İçin
            <br />
            Mükemmel Ayakkabı
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`scroll-reveal stagger-${i + 1} group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default`}
              style={{
                backgroundColor: "var(--color-white)",
                borderColor: "rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)",
                  }}
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="leading-[1.8]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-reveal stagger-4">
          <a
            href="#iletisim"
            className="inline-block rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-white)",
            }}
          >
            Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
}
