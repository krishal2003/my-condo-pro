
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head'

function Productdevelopment() {
  return (
    <>
      <Head>
        <title>Baliyo Venture | Product Development</title>
        <link rel="icon" href="https://i.ibb.co/pKsgzHh/logoo.png" />
      </Head>
      <div className="wrapper">
        <div className="software-dev">
          <div className="software-title">Product Development</div>
            <div className="software-section-wrapper">

          
          <div className="software-sub-title">Application Development</div>
          <div className="software-wrapper">
            <div>
              <img
                src="https://blog.zoom.us/wp-content/uploads/2021/12/future-50.jpg"
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
                src="https://blog.zoom.us/wp-content/uploads/2021/12/future-50.jpg"
                alt=""
                className="software-img"
              />
            </div> 
          </div>
          <div className="software-sub-title">Application Development</div>
          <div className="software-wrapper">
            <div>
              <img
                src="https://blog.zoom.us/wp-content/uploads/2021/12/future-50.jpg"
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
                src="https://blog.zoom.us/wp-content/uploads/2021/12/future-50.jpg"
                alt=""
                className="software-img"
              />
            </div> 
          </div>
          <div className="software-sub-title">Application Development</div>
          <div className="software-wrapper">
            <div>
              <img
                src="https://blog.zoom.us/wp-content/uploads/2021/12/future-50.jpg"
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
                src="https://blog.zoom.us/wp-content/uploads/2021/12/future-50.jpg"
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

export default Productdevelopment;

Productdevelopment.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
};