import "./Earnings.scss";
import Img from "../../assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Earnings() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left" data-aos="fade-right">
          <img src={Img} alt="" />
        </div>

        <div className="earnings__right" data-aos="fade-left">
          <h2>Track your earnings and cryptocode made it easy</h2>
          <p>Nulla dui ultrices sed nam liguka disfissim tell us. Sem smeper lorem facilites ut amet tindunt adipscing maesenas.</p>
          <a href="#" className="btn">GET STARTED</a>
        </div>
      </div>
    </section>
  )
}

export default Earnings
