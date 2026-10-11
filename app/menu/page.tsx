import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type MenuItem = {
  name: string;
  en: string;
  price: string;
};

type MenuSection = {
  id: string;
  title: string;
  english: string;
  description: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    id: "bakery",
    title: "ცომეული",
    english: "BAKERY & PASTRIES",
    description: "ახალი, ტრადიციული ნაწარმი ყოველდღე",
    items: [
      { name: "აჭარული ხაჭაპური", en: "Adjarian Khachapuri", price: "12 ₾" },
      {
        name: "აჭარული ხაჭაპური დიდი",
        en: "Adjarian Khachapuri (Large)",
        price: "17 ₾",
      },
      { name: "იმერული ხაჭაპური", en: "Imeruli Khachapuri", price: "5 ₾" },
      {
        name: "იმერული ხაჭაპური საშუალო",
        en: "Imeruli Khachapuri (Medium)",
        price: "10 ₾",
      },
      {
        name: "იმერული ხაჭაპური დიდი",
        en: "Imeruli Khachapuri (Large)",
        price: "15 ₾",
      },
      { name: "მეგრული ხაჭაპური", en: "Megrelian Khachapuri", price: "10 ₾" },
      { name: "ჩებურეკი", en: "Chebureki", price: "5 ₾" },
      { name: "კუბდარი", en: "Kubdari", price: "8 ₾" },
      {
        name: "პიცა პეპერონი დიდი",
        en: "Pepperoni Pizza (Large)",
        price: "20 ₾",
      },
      { name: "პიცა სერველადით", en: "Cervelat Pizza", price: "10 ₾" },
      {
        name: "აჭარული ლობიანი მწნილით",
        en: "Adjarian Lobiani with Pickles",
        price: "8 ₾",
      },
      { name: "ლობიანი", en: "Lobiani", price: "5 ₾" },
      { name: "ლობიანი ლორით", en: "Lobiani with Ham", price: "5.50 ₾" },
      { name: "ფენოვანი ხაჭაპური", en: "Layered Khachapuri", price: "5 ₾" },
      { name: "ფენოვანი ლობიანი", en: "Layered Lobiani", price: "4 ₾" },
      {
        name: "ფენოვანი ლობიანი ლორით",
        en: "Layered Lobiani with Ham",
        price: "4.50 ₾",
      },
      { name: "გურული ღვეზელი", en: "Guruli Pie", price: "5 ₾" },
      { name: "კარტოფილის ღვეზელი", en: "Potato Pie", price: "1.50 ₾" },
      {
        name: "ღვეზელი სოკოთი და ქათმით",
        en: "Chicken and Mushroom Pie",
        price: "5 ₾",
      },
      { name: "სოკოს ღვეზელი", en: "Mushroom Pie", price: "5 ₾" },
      { name: "ჰამბურგერი", en: "Hamburger", price: "5 ₾" },
      { name: "ჰოთდოგი", en: "Hot Dog", price: "3 ₾" },
      { name: "კარტოფილი ფრი", en: "French Fries", price: "4 ₾" },
    ],
  },
  {
    id: "made-to-order",
    title: "შეკვეთით მომზადებული",
    english: "MADE TO ORDER",
    description: "სპეციალურად შენთვის მომზადებული",
    items: [
      { name: "აჩმა", en: "Achma", price: "50 ₾" },
      { name: "ჩეხური ბაქლავა", en: "Czech Baklava", price: "50 ₾" },
      { name: "ომლეტი", en: "Omelette", price: "4 ₾" },
    ],
  },
  {
    id: "soups",
    title: "წვნიანები",
    english: "SOUPS",
    description: "თბილი და შინაური კერძები",
    items: [
      { name: "ბოსტნეულის წვნიანი", en: "Vegetable Soup", price: "8 ₾" },
      { name: "ოსპის წვნიანი", en: "Lentil Soup", price: "8 ₾" },
      { name: "ბორში", en: "Borscht", price: "8 ₾" },
      { name: "სუპ-ხარჩო", en: "Kharcho Soup", price: "15 ₾" },
      { name: "ქათმის ბულიონი", en: "Chicken Broth", price: "15 ₾" },
      { name: "ლობიო", en: "Lobio (Bean Stew)", price: "10 ₾" },
      { name: "ლობიო მწნილით", en: "Lobio with Pickles", price: "12 ₾" },
    ],
  },
  {
    id: "main-dishes",
    title: "ძირითადი კერძები",
    english: "MAIN DISHES",
    description: "კერძები ყოველდღიური სადილისა და ვახშმისთვის",
    items: [
      { name: "ხორცის ჩაშუშული", en: "Beef Chashushuli", price: "15 ₾" },
      { name: "გუფთა", en: "Gupta", price: "15 ₾" },
      { name: "ოსტრი", en: "Ostri (Spicy Beef Stew)", price: "15 ₾" },
      { name: "ოჯახური", en: "Ojakhuri (Meat and Potatoes)", price: "12 ₾" },
      { name: "შემწვარი ქათამი", en: "Fried Chicken", price: "35 ₾" },
    ],
  },
  {
    id: "cutlets-kebab",
    title: "კოტლეტები და ქაბაბი",
    english: "CUTLETS & KEBAB",
    description: "ნოყიერი კერძები",
    items: [
      { name: "საქონლის კოტლეტი", en: "Beef Cutlet", price: "5 ₾" },
      { name: "საქონლის ქაბაბი", en: "Beef Kebab", price: "5 ₾" },
      { name: "ქათმის კოტლეტი", en: "Chicken Cutlet", price: "4 ₾" },
      { name: "კოტლეტი წიწიბურათი", en: "Cutlet with Buckwheat", price: "8 ₾" },
      {
        name: "კოტლეტი პიურეთი",
        en: "Cutlet with Mashed Potatoes",
        price: "8 ₾",
      },
    ],
  },
  {
    id: "side-dishes",
    title: "გარნირები",
    english: "SIDE DISHES",
    description: "შეარჩიე შენი კერძის დანამატი",
    items: [
      { name: "ფრი", en: "French Fries", price: "5 ₾" },
      { name: "შემწვარი კარტოფილი", en: "Fried Potatoes", price: "5 ₾" },
      { name: "მჭადი", en: "Mchadi (Cornbread)", price: "2 ₾" },
      { name: "ყველი", en: "Cheese", price: "5 ₾" },
    ],
  },
  {
    id: "salads",
    title: "სალათები",
    english: "SALADS",
    description: "ახალი და ფერადი ინგრედიენტები",
    items: [
      {
        name: "სალათი კიტრით და პომიდვრით",
        en: "Georgian Cucumber and Tomato Salad",
        price: "10 ₾",
      },
      {
        name: "სალათი სტაფილოთი და ჭარხლით",
        en: "Carrot and Beetroot Salad",
        price: "5 ₾",
      },
    ],
  },
  {
    id: "sauces",
    title: "საწებლები",
    english: "SAUCES",
    description: "საწებლები შენი კერძისთვის",
    items: [
      { name: "საწებელი", en: "Satsebeli Sauce", price: "2 ₾" },
      { name: "ტყემალი", en: "Tkemali (Plum Sauce)", price: "2 ₾" },
    ],
  },
  {
    id: "drinks",
    title: "სასმელები",
    english: "DRINKS",
    description: "ცხელი და ცივი სასმელები",
    items: [
      { name: "თურქული ყავა", en: "Turkish Coffee", price: "2 ₾" },
      { name: "ჩაი", en: "Tea", price: "2 ₾" },
      { name: "ლუდი", en: "Beer", price: "2.50 ₾" },
      { name: "აირანი", en: "Ayran", price: "2 ₾" },
      { name: "მაწონი", en: "Matsoni (Georgian Yogurt)", price: "2 ₾" },
      { name: "კაპი ფალპი", en: "Cappy Pulpy", price: "2.80 ₾" },
      { name: "ფიუს თი", en: "Fuze Tea", price: "2.30 ₾" },
      { name: "წყალი", en: "Water", price: "1 ₾" },
      { name: "კოლა 0.5 ლ", en: "Cola (500 ml)", price: "2 ₾" },
      { name: "ფანტა 0.5 ლ", en: "Fanta (500 ml)", price: "2 ₾" },
      { name: "ბერნი ენერგეტიკული", en: "Burn Energy Drink", price: "2 ₾" },
      { name: "კოლა შუშის ბოთლში", en: "Cola (Glass Bottle)", price: "1.80 ₾" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />

      <main className="family-menu">
        <section className="family-menu-hero">
          <p className="family-menu-eyebrow">FAMILY KITCHEN</p>

          <h1>
            ჩვენი <span>მენიუ</span>
          </h1>

          <p className="family-menu-lead">
            შინაური კერძები და არჩევანი ყველა გემოვნებისთვის.
          </p>

          <div className="family-menu-hero-bottom">
            <span>მომზადებული ყურადღებით</span>
            <span>MADE WITH CARE</span>
          </div>
        </section>

        <div className="family-menu-content">
          {menuSections.map((section) => (
            <section
              className="family-menu-section"
              id={section.id}
              key={section.id}
            >
              <div className="family-menu-section-heading">
                <div>
                  <p className="family-menu-eyebrow">{section.english}</p>
                  <h2>{section.title}</h2>
                  <p className="family-menu-description">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="family-menu-items">
                {section.items.map((item) => (
                  <article
                    className="family-menu-item"
                    key={item.name + item.en}
                  >
                    <div className="family-menu-item-name">
                      <h3>{item.name}</h3>
                      <p>{item.en}</p>
                    </div>

                    <span className="family-menu-price">{item.price}</span>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="family-menu-footer">
          <p className="family-menu-eyebrow">FAMILY KITCHEN</p>
          <h2>გელოდებით ჩვენს კაფეში.</h2>

          <Link href="/contact" className="primary-button">
            დაგვიკავშირდი <span>↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
