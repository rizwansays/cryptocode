import './Subscribe.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Subscribe() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section className='subscribe'>
      <div className="subscribe__container wrapper" data-aos="fade-up">
        <h2>Subscribe & get news updates</h2>
        <p>Duis massa possuere commodo sed tortor ultrices accumsan augue. Aliquet bibendum placerat vivamus diam ullamcorper vitae sapien auctor ut. Suspendisse donec id aenean diam dolor nec vitea massa id.</p>
        <form action="#">
          <input type="email" placeholder='Write Your Email Here' />
          <a href="#" className='btn'>Subscribe</a>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
