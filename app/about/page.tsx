import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      {" "}
      <Header />
      ```
      <main
        style={{
          background: "#f8f5ef",
          color: "#493426",
          minHeight: "70vh",
        }}
      >
        <section
          style={{
            padding: "90px 8% 70px",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#a77b50",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "20px",
            }}
          >
            MAGELLAN CAFÉ
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 68px)",
              fontWeight: 400,
              margin: "0 0 25px",
            }}
          >
            ჩვენს შესახებ
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              maxWidth: "720px",
              margin: "0 auto",
              color: "#6b594b",
            }}
          >
            Magellan Café არის სივრცე, სადაც სტუმრებს შეუძლიათ ყოველდღიური
            რიტმისგან მცირე ხნით დაისვენონ, შეხვდნენ მეგობრებს და სასიამოვნო დრო
            გაატარონ.
          </p>
        </section>

        <section
          style={{
            background: "#493426",
            color: "#f8f5ef",
            padding: "65px 8%",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "45px",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "#c5a17d",
                  letterSpacing: "3px",
                  fontSize: "12px",
                }}
              >
                OUR STORY
              </p>

              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: 400,
                  margin: "15px 0 22px",
                }}
              >
                ჩვენი ისტორია
              </h2>

              <p
                style={{
                  color: "#e0d5ca",
                  fontSize: "16px",
                  lineHeight: 2,
                }}
              >
                Magellan Café-მა თავისი გზა 2025 წლის მარტში დაიწყო ბათუმში.
                ჩვენ ვქმნით სივრცეს, სადაც სტუმრებს შეუძლიათ შეაჩერონ
                ყოველდღიური ფუსფუსი და დრო სასიამოვნოდ გაატარონ.
              </p>
            </div>

            <div
              style={{
                border: "1px solid #8d715b",
                padding: "40px 30px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#c5a17d",
                  fontSize: "12px",
                  letterSpacing: "3px",
                }}
              >
                ESTABLISHED
              </p>

              <p
                style={{
                  fontSize: "54px",
                  fontWeight: 400,
                  margin: "15px 0",
                }}
              >
                2025
              </p>

              <p style={{ color: "#e0d5ca", fontSize: "15px" }}>
                მარტი · ბათუმი, საქართველო
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "75px 8%",
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#a77b50",
              letterSpacing: "3px",
              fontSize: "12px",
            }}
          >
            OUR APPROACH
          </p>

          <h2
            style={{
              fontSize: "34px",
              fontWeight: 400,
              margin: "15px 0 20px",
            }}
          >
            ჩვენი მიდგომა
          </h2>

          <p
            style={{
              color: "#6b594b",
              fontSize: "16px",
              lineHeight: 2,
            }}
          >
            ჩვენთვის მნიშვნელოვანია სტუმართმოყვარეობა, ყურადღებიანი მომსახურება
            და გარემო, სადაც თითოეული სტუმარი თავს კომფორტულად იგრძნობს.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
