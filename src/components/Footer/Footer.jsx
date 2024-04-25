import { lazy } from 'react';
import './Footer.css';
import FooterLogo from '../../assets/images/047dbb-blue-logo.png';
import { SiFacebook, SiGmail, SiInstagram, SiTwitter } from '@icons-pack/react-simple-icons';

export default function Footer() {
    return (
        <footer className='footer d-flex flex-column justify-content-around align-items-center gap-4'>
            <section className='d-flex justify-content-around align-items-center gap-5'>
                <img src={FooterLogo} className='footer-image' width='252px' height='155px' alt='marco-eiffel' />
                <div className='social-media'>
                    <button className='btn footer-btn'>
                        <a href='https://facebook.com/'>
                            <SiFacebook className='social-media-icon' size={35} />
                        </a>
                    </button>
                    <button className='btn footer-btn'>
                        <a href='mailto:gmail.com'>
                            <SiGmail className='social-media-icon' size={35} />
                        </a>
                    </button>
                    <button className='btn footer-btn'>
                        <a href='https://www.instagram.com/'>
                            <SiInstagram className='social-media-icon' size={35} />
                        </a>
                    </button>
                    <button className='btn footer-btn'>
                        <a href='https://twitter.com/'>
                            <SiTwitter className='social-media-icon' size={35} />
                        </a>
                    </button>
                </div>
            </section>
            <h5>Gotthardstrasse 9, D-09052 Chemnitz</h5>
            <section className='d-flex justify-content-around align-items-center gap-3'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row'>
                    <li className='nav-item'><a className='nav-link' href='/terms' >Terms</a></li>
                    <li className='nav-item'><a className='nav-link' href='/privacy-policy'>Privacy Policy</a></li>
                </ul>
            </section>
        </footer>
    )
}