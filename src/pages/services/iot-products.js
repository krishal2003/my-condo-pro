import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

function Iotproducts() {
  return (
    <>
      <Head>
        <title>Baliyo Venture | IOT Products</title>
        <link rel="icon" href="https://i.ibb.co/pKsgzHh/logoo.png" />
      </Head>
      <div className="wrapper">
        <div className="software-dev">
          <div className="software-title">IOT Products</div>
          <div className="software-section-wrapper">
            <div className="software-sub-title">Home Automation</div>
            <div className="software-wrapper">
              <div>
                <img
                  src="https://www.undp.org/sites/g/files/zskgke326/files/migration/np/UNDP-NP-ALAB-Sisterrobot-2020.jpg"
                  alt=""
                  className="software-img"
                />
              </div>
              <div className="software-describe">
                This category includes IoT devices that are used to automate{" "}
                <br />
                and control various functions in a home, such as lighting,{" "}
                <br /> temperature, security, and entertainment systems.
                <div className="see-more-software">See more</div>
              </div>
            </div>

            <div className="software-sub-title">Industrial IoT</div>
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
                  src="https://www.undp.org/sites/g/files/zskgke326/files/migration/np/UNDP-NP-ALAB-Sisterrobot-2020.jpg"
                  alt=""
                  className="software-img"
                />
              </div>
            </div>
            <div className="software-sub-title">Healthcare</div>
            <div className="software-wrapper">
              <div>
                <img
                  src="https://www.undp.org/sites/g/files/zskgke326/files/migration/np/UNDP-NP-ALAB-Sisterrobot-2020.jpg"
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

            <div className="software-sub-title">Agriculture </div>
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
                  src="https://www.undp.org/sites/g/files/zskgke326/files/migration/np/UNDP-NP-ALAB-Sisterrobot-2020.jpg"
                  alt=""
                  className="software-img"
                />
              </div>
            </div>
            <div className="software-sub-title">Automotive </div>
            <div className="software-wrapper">
              <div>
                <img
                  src="https://www.undp.org/sites/g/files/zskgke326/files/migration/np/UNDP-NP-ALAB-Sisterrobot-2020.jpg"
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

            <div className="software-sub-title">Wearables </div>
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
                  src="https://www.undp.org/sites/g/files/zskgke326/files/migration/np/UNDP-NP-ALAB-Sisterrobot-2020.jpg"
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

export default Iotproducts;

Iotproducts.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
};
