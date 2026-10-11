export default function Footer() {
  const woltUrl = "https://wolt.com/ka/geo/batumi/restaurant/bakery-magellan";

  const glovoUrl =
    "https://glovoapp.com/ka/ge/batumi/stores/bakery-magellan-bat";

  return (
    <footer className="site-footer">
      {" "}
      <div className="footer-main">
        {" "}
        <div className="footer-brand">
          {" "}
          <h2>MAGELLAN CAFÉ</h2>{" "}
        </div>
        <div className="footer-contact">
          <h3>დაგვიკავშირდით</h3>
          <p>ბათუმი, აბუსერიძის 32</p>

          <a href="tel:+995591816690">591 81 66 90</a>

          <a href="tel:+995571772006">571 77 20 06</a>

          <p className="footer-hours">ყოველდღე · 09:00–23:00</p>
        </div>
        <div className="footer-delivery">
          <h3>შეუკვეთეთ ონლაინ</h3>
          <p>შეუკვეთეთ ონლაინ — მარტივად და სწრაფად.</p>

          <div className="footer-delivery-buttons">
            <a
              href={woltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-delivery-link footer-wolt"
            >
              Wolt <span>↗</span>
            </a>

            <a
              href={glovoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-delivery-link footer-glovo"
            >
              Glovo <span>↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Magellan Café</span>
      </div>
    </footer>
  );
}
