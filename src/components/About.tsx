"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="hakkimizda" className="py-28 lg:py-36" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-3 scroll-reveal">
            <span
              className="text-[0.8rem] uppercase tracking-[0.2em] font-semibold mb-4 block"
              style={{ color: "var(--color-accent)" }}
            >
              Hakkımızda
            </span>
            <h2
              className="font-heading font-semibold mb-8 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              Kızılay&apos;ın Kalbinde,
              <br />
              Zarafetin Adresi
            </h2>
            <div className="space-y-6 text-lg leading-[1.8]" style={{ color: "var(--color-text-muted)" }}>
              <p>
                Ankara&apos;nın en işlek ve prestijli noktası İzmir Caddesi üzerinde, yıllardır gelin adaylarına
                ve özel gece davetlerine hazırlanan hanımlara hizmet veriyoruz. Kızılay&apos;ın kalbinde yer alan
                mağazamız, şıklığı ve konforu bir arada sunan özenle seçilmiş koleksiyonuyla tanınıyor.
              </p>
              <p>
                Her ayakkabının bir hikayesi olduğuna inanıyoruz. Düğün gününüz, mezuniyet balosunuz ya da
                unutulmaz bir davet geceniz olsun; ayağınıza en uygun modeli bulmanız için kişisel danışmanlık
                hizmeti sunuyoruz. Kaliteli malzeme, ince işçilik ve zamansız tasarım anlayışımızla
                fark yaratıyoruz.
              </p>
              <p>
                Müşterilerimizin memnuniyeti bizim en büyük gurur kaynağımız. Her ziyaretçimizi ailemizin
                bir parçası olarak görüyor, en özel günlerinde yanlarında olmaktan mutluluk duyuyoruz.
              </p>
            </div>
          </div>

          {/* Decorative image */}
          <div className="lg:col-span-2 scroll-reveal stagger-2">
            <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80&auto=format&fit=crop"
                alt="Zarif gelin ayakkabıları"
                className="w-full h-full object-cover absolute inset-0"
                style={{ minHeight: "400px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              >
                <p
                  className="text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ color: "var(--color-accent)" }}
                >
                  Yıllardır Güvenle
                </p>
                <p className="text-white text-lg font-heading font-semibold mt-1">
                  Ankara Kızılay&apos;da Hizmetinizdeyiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
