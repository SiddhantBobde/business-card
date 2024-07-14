import './App.css'
import ProfileImg from './assets/Profile.jpg'
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function App() {
  return (
    <div className='app'>
      <div className='business-card-container'>
        <div className='businnes-card'>
          <div className='card-img'>
            <img src={ProfileImg} alt='profile-img'></img>
          </div>
          <div className='card-body'>
            <div className='profile-info'>
              <h1>Siddhant Bobde</h1>
              <h4>Software Engineer</h4>
              <a href={'https://mysite.example/'} target='_blank' rel="noopener noreferrer">mysite.example</a>
            </div>
            <div className='connect-btn'>
              <button className='email-btn'>
                <span className='icons'>
                  <MdEmail />
                </span>
                <span>
                  Email
                </span>
              </button>
              <button className='linkedIn-btn'>
                <span className='icons'>
                  <IoLogoLinkedin />
                </span>
                <span>
                  LinkedIn
                </span>
              </button>
            </div>
            <div className='info-container'>
              <div>
                <h3>About</h3>
                <p>
                  I am a software developer with expertise in ReactJs, Java, Python, Spring-Boot. I am always looking for something new to learn. Do feel free to reach out to me.
                </p>
              </div>
              <div>
                <h3>Interests</h3>
                <p>
                  Badminton, playing guitar, reading and also likes to write sometimes,
                  play video games and take pictures of nature.
                </p>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <FaXTwitter className='card-footer-icon' />
            <FaFacebookSquare className='card-footer-icon' />
            <FaInstagram className='card-footer-icon' />
            <FaSquareGithub className='card-footer-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
