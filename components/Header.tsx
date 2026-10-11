import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "მთავარი" },
  { href: "/menu", label: "მენიუ" },
  { href: "/about", label: "ჩვენ შესახებ" },
  { href: "/gallery", label: "გალერეა" },
  { href: "/contact", label: "კონტაქტი" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="მთავარი გვერდი">
          <Image
            src="/images/logo.png"
            alt="Magellan Café"
            width={160}
            height={70}
            priority
            className="logo-image"
          />
        </Link>

        <nav className="main-nav" aria-label="მთავარი ნავიგაცია">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
