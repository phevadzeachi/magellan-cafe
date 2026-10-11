
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const woltUrl =
  "https://wolt.com/ka/geo/batumi/restaurant/bakery-magellan";

const glovoUrl =
  "https://glovoapp.com/ka/ge/batumi/stores/bakery-magellan-bat";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Magellan%20Cafe%2C%20Abuseridze%2032%2C%20Batumi";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <p className="section-eyebrow">MAGELLAN CAFÉ</p>

          <h1>
            გვესტუმრეთ
            <br />
            <span>Café Magellan-ში.</span>
          </h1>

          <p className="contact-hero-description">
            გამორჩეული კერძები, მყუდრო გარემო და სასიამოვნო
            დრო მეგობრებთან ერთად.
          </p>

          <Link href="/menu" className="primary-button">
            მენიუს ნახვა <span>↗</span>
          </Link>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <p className="section-eyebrow">GET IN TOUCH</p>
            <h2>დაგვიკავშირდით</h2>

            <div className="contact-detail">
              <span>მისამართი</span>
              <p>ბათუმი, აბუსერიძის 32</p>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-text-link"
              >
                რუკაზე ნახვა ↗
              </a>
            </div>

            <div className="contact-detail">
              <span>ტელეფონები</span>

              <a
                href="tel:+995591816690"
                className="contact-value-link"
              >
                591 81 66 90
              </a>

              <a
                href="tel:+995571772006"
                className="contact-value-link"
              >
                571 77 20 06
              </a>
            </div>

            <div className="contact-detail">
              <span>სამუშაო საათები</span>
              <p>ყოველდღე · 09:00–23:00</p>
            </div>

            <div className="contact-detail">
              <span>ონლაინ შეკვეთა</span>
              <p>შეუკვეთეთ ონლაინ — მარტივად და სწრაფად.</p>

              <div className="delivery-buttons">
                <a
                  href={woltUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="delivery-button wolt-button"
                >
                  შეუკვეთე Wolt-ით <span>↗</span>
                </a>

                <a
                  href={glovoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="delivery-button glovo-button"
                >
                  შეუკვეთე Glovo-თი <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map-column">
            <div className="contact-map-heading">
              <p className="section-eyebrow">FIND US</p>
              <h2>გელოდებით ჩვენთან</h2>
              <p>გვეწვიეთ ბათუმში, აბუსერიძის 32-ში.</p>
            </div>

            <div className="contact-map">
              <iframe
                title="Magellan Café-ის მდებარეობა ბათუმში"
                src="https://maps.google.com/maps?q=Magellan%20Cafe%2C%20Abuseridze%2032%2C%20Batumi%2C%20Georgia&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-open-link"
            >
              Google Maps-ში გახსნა ↗
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
;
