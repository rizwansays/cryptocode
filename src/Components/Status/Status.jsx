import "./Status.scss";
import StatusImg from "../../assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Status() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section className="status">
      <div className="status__container wrapper">
        <div className="status__left" data-aos="fade-right">
          <h2>Trust us due to our safe and convenient deposit</h2>
          <p>
            Tritique morbi scelersque vitae. Nulla dui ultrices sad nam ligula
            dignissim teelus semper lorem facilistsi ut. Amet tincidunt
            adispscing varius maecenas asipiscing.
          </p>

          <a href="#" className="btn">
            KNOW MORE
          </a>
        </div>

        <div className="status__right" data-aos="fade-left">
        <img src={StatusImg} alt="" />
      </div>
      </div>

    </section>
  );
}

export default Status;
