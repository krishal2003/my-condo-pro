import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
function Architecturaldesign() {
  return (
    <>
      <Head>
        <title>Baliyo Venture | Architectural Design </title>
        <link rel="icon" href="https://i.ibb.co/pKsgzHh/logoo.png" />
      </Head>
      <div className="wrapper">
        <div className="software-dev">
          <div className="software-title">Architectural Design </div>
          <div className="software-section-wrapper">
            <div className="software-sub-title">Tesla Showroom</div>
            <div className="software-wrapper">
              <div>
                <img
                  src="https://www.indiacarnews.com/wp-content/uploads/2021/04/Tesla-Showrooms-India-1000x600.jpg"
                  alt=""
                  className="software-img"
                />
              </div>
              <div className="software-describe">
                Sleek, futuristic, geometric shapes adorn Tesla's showroom,{" "}
                <br /> showcasing the brand's modern vision.
                <br />
                <Link href="https://youtu.be/N4s9mldR-go" target="_blank">
                  <div className="see-more-software">See more</div>
                </Link>
              </div>
            </div>

            <div className="software-sub-title">Hostel Hub</div>
            <div className="software-wrapper">
              <div className="software-describe">
                Hostel Hub's 3D design features a cozy and inviting <br /> space
                with communal areas for socializing and relaxation.
                <Link
                  href="https://www.youtube.com/watch?v=V91pIjyGqzo"
                  target="_blank"
                >
                  <div className="see-more-software">See more</div>
                </Link>
              </div>
              <div>
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/73/34/f8/one-of-our-sharing-rooms.jpg?w=700&h=-1&s=1"
                  alt=""
                  className="software-img"
                />
              </div>
            </div>
            <div className="software-sub-title">Thankot Mart </div>
            <div className="software-wrapper">
              <div>
                <img
                  src="https://ktm2day.com/wp-content/uploads/2013/04/big_mart_store_nepal.jpg"
                  alt=""
                  className="software-img"
                />
              </div>
              <div className="software-describe">
                Thankot Mart's 3D design highlights its vibrant atmosphere{" "}
                <br /> and efficient use of space for optimal shopping
                experience.
                <Link href="https://youtu.be/aDYojLbFWmc" target="_blank">
                  <div className="see-more-software">See more</div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Architecturaldesign;



Architecturaldesign.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
};
