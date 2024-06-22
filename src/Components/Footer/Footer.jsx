import './Footer.scss';
import Logo from '../../assets/Logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <section className='footer'>
      <div className="footer__container wrapper">
        <div className="footer__col">
          <img src={Logo} alt="" />
          <p>Posuere ac in nisl sed augue. Ultrices eget pretium sit euismod mi id posuesre ac in nisl sed augue.</p>
        </div>

        <div className="footer__col">
          <h3>About</h3>
          <a href="#">about us</a>
          <a href="#">features</a>
          <a href="#">news</a>
        </div>
        <div className="footer__col">
          <h3>Company</h3>
          <a href="#">Cryptocode</a>
          <a href="#">Security</a>
          <a href="#">Rankings</a>
        </div>

        <div className="footer__col">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer__col">
          <h3>Socials</h3>
          <div className="footer__icons">
          <a href="#" className='footer__icon'>
            <FaFacebook />
          </a>
          <a href="#" className='footer__icon'>
            <FaInstagram />
          </a>
          <a href="#" className='footer__icon'>
            <FaTwitter />
          </a>
          <a href="#" className='footer__icon'>
            <FaLinkedin />
          </a>
          <a href="#" className='footer__icon'>
            <FaYoutube />
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
