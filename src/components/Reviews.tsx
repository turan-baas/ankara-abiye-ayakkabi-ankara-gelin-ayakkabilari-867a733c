"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    text: "Düğünüm için gelin ayakkabısı arıyordum ve burada tam istediğim modeli buldum. Hem çok şık hem de inanılmaz rahat. Tüm gece dans ettim, ayaklarım hiç ağrımadı!",
    name: "Elif Yıldırım",
  },
  {
    text: "Kızımın nişanı için ayakkabı aldık. Personel çok ilgili ve yardımsever. Geniş ürün yelpazesi sayesinde hemen beğendiğimiz modeli bulduk. Kalitesi de gerçekten çok iyi.",
    name: "Ayşe Karagöz",
  },
  {
    text: "İş yemeği için acil bir abiye ayakkabıya ihtiyacım vardı. Mağazaya girdiğimde beni hemen karşıladılar ve ihtiyacıma uygun birkaç model önerdiler. Harika bir alışveriş deneyimiydi.",
    name: "Selin Demirtaş",
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className="w-4 h-4"
      fill={filled ? "var(--color-accent)" : "none"}
      stroke="var(--color-accent)"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  const ref = useScrollReveal();

  return (
    <section
      id="yorumlar"
      className="py-28 lg:py-36"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <span
            className="text-[0.8rem] uppercase tracking-[0.2em] font-semibold mb-4 block"
            style={{ color: "var(--color-accent)" }}
          >
            Yorumlar
          </span>
          <div
            className="font-heading font-bold leading-none mb-4"
            style={{ fontSize: "6rem", color: "var(--color-primary)" }}
          >
            4.0
          </div>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <StarIcon key={i} filled />
            ))}
            <StarIcon filled={false} />
          </div>
          <p style={{ color: "var(--color-text-muted)" }}>
            Google Değerlendirmesi
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`scroll-reveal stagger-${i + 1} rounded-2xl p-8 shadow-sm relative`}
              style={{ backgroundColor: "var(--color-white)" }}
            >
              {/* Decorative quote */}
              <svg
                className="absolute top-6 right-6 w-12 h-12 opacity-[0.08]"
                fill="var(--color-accent)"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p
                className="italic leading-[1.8] mb-6 relative z-10"
                style={{ color: "var(--color-text-muted)" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Google Yorumu
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} filled />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
