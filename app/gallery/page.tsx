"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const categories = [
  {
    title: "ცომეული და ხაჭაპური",
    subtitle: "ქართული საცხობის რჩეული",
    items: [
      { name: "ფენოვანი ხაჭაპური", image: "fenovani-khachapuri.jpg" },
      { name: "იმერული ხაჭაპური", image: "imeruli-khachapuri.jpg" },
      { name: "აჭარული ხაჭაპური", image: "acharuli-khachapuri.jpg" },
      { name: "ფენოვანი ლობიანი", image: "lobiani-fenovani.jpg" },
      { name: "კუბდარი", image: "kubdari.jpg" },
      { name: "კარტოფილის ღვეზელი", image: "kartopilis-ghvezeli.jpg" },
      { name: "ლობიანი მწნილით", image: "lobiani-mtsnili.jpg" },
      { name: "გურული ღვეზელი", image: "guruli-ghvezeli.jpg" },
      { name: "მეგრული ხაჭაპური", image: "megruli-khachapuri.jpg" },
      { name: "ჩებურეკი", image: "chebureki.jpg" },
    ],
  },
  {
    title: "პიცა და სწრაფი კერძები",
    subtitle: "კიდევ უფრო მრავალფეროვანი არჩევანი",
    items: [
      { name: "ჰოთ-დოგი", image: "hot-dog.jpg" },
      { name: "პიცა მარგარიტა", image: "pizza-margherita.jpg" },
      { name: "პიცა პეპერონი", image: "pizza-pepperoni.jpg" },
      { name: "ფრი", image: "french-fries.jpg" },
    ],
  },
  {
    title: "ცხელი კერძები და სალათები",
    subtitle: "საყვარელი კერძები ყოველდღე",
    items: [
      {
        name: "კიტრისა და პომიდვრის სალათა",
        image: "cucumber-tomato-salad.jpg",
      },
      { name: "ჩაშუშული", image: "chashushuli.jpg" },
      { name: "ოჯახური", image: "ojakhuri.jpg" },
      { name: "ოსტრი", image: "ostri.jpg" },
      { name: "ქათმის სუპი", image: "chicken-soup.jpg" },
      { name: "ბორში", image: "borscht.jpg" },
    ],
  },
];

const allItems = categories.flatMap((category) => category.items);

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex === null ? null : allItems[selectedIndex];

  const closeImage = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + allItems.length) % allItems.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % allItems.length,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      {" "}
      <Header />
      <main style={{ background: "#f8f5ef", color: "#493426" }}>
        <section
          style={{
            padding: "75px 6% 55px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#a77b50",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "18px",
            }}
          >
            MAGELLAN CAFÉ
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              fontWeight: 400,
              margin: "0 0 22px",
            }}
          >
            ჩვენი გალერეა
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: "#6b594b",
              fontSize: "16px",
              lineHeight: 1.9,
            }}
          >
            დაათვალიერეთ Magellan Café-ის კერძები და აღმოაჩინეთ თქვენი შემდეგი
            საყვარელი არჩევანი.
          </p>
        </section>

        {categories.map((category) => (
          <section
            key={category.title}
            style={{
              padding: "25px 6% 55px",
              maxWidth: "1500px",
              margin: "0 auto",
            }}
          >
            <div style={{ marginBottom: "25px" }}>
              <h2
                style={{
                  fontSize: "clamp(25px, 3vw, 36px)",
                  fontWeight: 400,
                  margin: "0 0 10px",
                }}
              >
                {category.title}
              </h2>

              <p
                style={{
                  color: "#8b7664",
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                {category.subtitle}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
              }}
            >
              {category.items.map((item) => {
                const index = allItems.findIndex(
                  (photo) => photo.image === item.image,
                );

                return (
                  <article
                    key={item.image}
                    style={{
                      background: "#fffdf9",
                      overflow: "hidden",
                      border: "1px solid #e9dfd3",
                      borderRadius: "8px",
                      boxShadow: "0 4px 18px rgba(73, 52, 38, 0.05)",
                      transition: "transform 0.35s ease, box-shadow 0.35s ease",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.transform = "translateY(-6px)";
                      event.currentTarget.style.boxShadow =
                        "0 16px 32px rgba(73, 52, 38, 0.13)";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.transform = "translateY(0)";
                      event.currentTarget.style.boxShadow =
                        "0 4px 18px rgba(73, 52, 38, 0.05)";
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      aria-label={`${item.name} — დიდი ფოტოს გახსნა`}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "240px",
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        overflow: "hidden",
                        cursor: "zoom-in",
                      }}
                    >
                      <img
                        src={`/images/gallery/${item.image}`}
                        alt={item.name}
                        loading="lazy"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "240px",
                          objectFit: "cover",
                          transition:
                            "transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1)",
                        }}
                        onMouseEnter={(event) => {
                          event.currentTarget.style.transform = "scale(1.07)";
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </button>

                    <div style={{ padding: "18px 18px 20px" }}>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "17px",
                          fontWeight: 500,
                          letterSpacing: "0.2px",
                        }}
                      >
                        {item.name}
                      </h3>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      {selectedItem && selectedIndex !== null && (
        <div
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="ფოტოს ნახვა"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(15, 12, 10, 0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "65px 70px",
            animation: "galleryFadeIn 0.25s ease",
          }}
        >
          <style>{`
        @keyframes galleryFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes galleryImageIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 600px) {
          .gallery-lightbox-content {
            width: 100%;
          }
        }
      `}</style>

          <button
            type="button"
            onClick={closeImage}
            aria-label="დახურვა"
            style={{
              position: "absolute",
              top: "18px",
              right: "24px",
              width: "44px",
              height: "44px",
              border: "1px solid rgba(255,255,255,0.45)",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="წინა ფოტო"
            style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "46px",
              height: "56px",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "32px",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <img
              key={selectedItem.image}
              src={`/images/gallery/${selectedItem.image}`}
              alt={selectedItem.name}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "calc(100vh - 145px)",
                objectFit: "contain",
                borderRadius: "4px",
                boxShadow: "0 15px 50px rgba(0,0,0,0.35)",
                animation: "galleryImageIn 0.3s ease",
              }}
            />

            <p
              style={{
                color: "white",
                fontSize: "17px",
                margin: "15px 0 5px",
                textAlign: "center",
              }}
            >
              {selectedItem.name}
            </p>

            <p
              style={{
                color: "#d0c3b7",
                fontSize: "13px",
                margin: 0,
              }}
            >
              {selectedIndex + 1} / {allItems.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="შემდეგი ფოტო"
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "46px",
              height: "56px",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "32px",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}
