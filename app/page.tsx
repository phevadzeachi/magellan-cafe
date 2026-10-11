import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const featuredItems = [
  {
    title: "ცომეული",
    description: "ქართული ტრადიციული ნაწარმი, ახალგამომცხვარი ყოველდღე.",
    image: "/images/pastry-new.jpg",
    alt: "ქართული ცომეული",
    href: "/menu#bakery",
  },
  {
    title: "კერძები",
    description: "კერძები სასიამოვნო სადილისა და ვახშმისთვის.",
    image: "/images/brunch.jpg",
    alt: "კაფეს კერძები",
    href: "/menu#main-dishes",
  },
  {
    title: "ყავა და სასმელები",
    description: "ყავა, ჩაი და ცივი სასმელები.",
    image: "/images/coffee.jpg",
    alt: "კაფეს სასმელები",
    href: "/menu#drinks",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">MAGELLAN CAFÉ</p>

            <h1> გემო, რომელიც გამოგვარჩევს </h1>

            <p className="hero-description">
              გამორჩეული კერძები, მყუდრო გარემო და სასიამოვნო დრო მეგობრებთან
              ერთად.
            </p>

            <Link href="/menu" className="primary-button">
              მენიუს ნახვა <span>↗</span>
            </Link>
          </div>

          <div className="hero-bottom">
            <span>ბათუმი · აბუსერიძის 32</span>
            <span>MAGELLAN</span>
          </div>
        </section>

        {/* FEATURED CATEGORIES */}
        <section className="featured-section">
          <div className="featured-heading">
            <div>
              <p className="section-eyebrow">OUR SELECTION</p>
              <h2>გემრიელი არჩევანი</h2>
            </div>

            <Link href="/menu" className="text-link">
              სრული მენიუ <span>↗</span>
            </Link>
          </div>

          <div className="featured-grid">
            {featuredItems.map((item) => (
              <Link href={item.href} className="featured-card" key={item.title}>
                <div className="featured-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="featured-photo"
                  />

                  <span className="featured-arrow">↗</span>
                </div>

                <div className="featured-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
