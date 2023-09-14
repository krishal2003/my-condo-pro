import Head from 'next/head'
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function softwaredevelopment() {
  return (
    <>
      <Head>
        <title>Baliyo Venture | Software Development</title>
        <link rel="icon" href="https://i.ibb.co/pKsgzHh/logoo.png" />
      </Head>
      <div className="wrapper">
        <div className="software-dev">
          <div className="software-title">Software Development</div>
            <div className="software-section-wrapper">

          
          <div className="software-sub-title">Hiking Bees </div>
          <div className="software-wrapper">
            <div>
              <img
                src="https://i.ibb.co/KySLLbx/hiking.jpg"
                alt=""
                className="software-img"
              />
            </div>
            <div className="software-describe">
            Hiking Bees is a popular Nepali travel website that offers expert <br /> advice and guidance on hiking and trekking adventures <br /> in the region.
              <br />
      
      <Link href="https://hikingbees.com/" target="_blank">
      <div className="see-more-software">See more</div>
      </Link>
            </div>
          </div>


          <div className="software-sub-title">System Development</div>
          <div className="software-wrapper">
          <div className="software-describe">
              {" "}
              Involves a range of activities such as requirements analysis,{" "}
              <br /> coding, testing, debugging, and deployment.
              <br />
      <div className="see-more-software">See more</div>
            </div>
            <div>
              <img
                src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334%2B0%2B2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg"
                alt=""
                className="software-img"
              />
            </div> 
          </div>
          <div className="software-sub-title">Application Development</div>
          <div className="software-wrapper">
            <div>
              <img
                src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334%2B0%2B2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg"
                alt=""
                className="software-img"
              />
            </div>
            <div className="software-describe">
              {" "}
              Involves a range of activities such as requirements analysis,{" "}
              <br /> coding, testing, debugging, and deployment.
              <br />
      <div className="see-more-software">See more</div>
            </div>
          </div>


          <div className="software-sub-title">System Development</div>
          <div className="software-wrapper">
          <div className="software-describe">
              {" "}
              Involves a range of activities such as requirements analysis,{" "}
              <br /> coding, testing, debugging, and deployment.
              <br />
      <div className="see-more-software">See more</div>
            </div>
            <div>
              <img
                src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334%2B0%2B2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg"
                alt=""
                className="software-img"
              />
            </div> 
          </div>
          <div className="software-sub-title">Application Development</div>
          <div className="software-wrapper">
            <div>
              <img
                src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334%2B0%2B2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg"
                alt=""
                className="software-img"
              />
            </div>
            <div className="software-describe">
              {" "}
              Involves a range of activities such as requirements analysis,{" "}
              <br /> coding, testing, debugging, and deployment.<br />
      <div className="see-more-software">See more</div>
            </div>
          </div>


          <div className="software-sub-title">System Development</div>
          <div className="software-wrapper">
          <div className="software-describe">
              {" "}
              Involves a range of activities such as requirements analysis,{" "}
              <br /> coding, testing, debugging, and deployment.
              <br />
      <div className="see-more-software">See more</div>
            </div>
            <div>
              <img
                src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334%2B0%2B2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg"
                alt=""
                className="software-img"
              />
            </div> 
          </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default softwaredevelopment;


softwaredevelopment.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
};

