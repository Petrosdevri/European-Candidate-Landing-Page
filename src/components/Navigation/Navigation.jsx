import './Navigation.css';
import NavbarLogo from '../../assets/images/047dbb-blue-logo.png';

export default function Navigation() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'><img src={NavbarLogo} loading={'lazy'} height='80vh' alt='navbar-logo'/></a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbar-content'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about' onClick={() => document.getElementById('navbar-content').classList.remove('show')}>About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#platform' onClick={() => document.getElementById('navbar-content').classList.remove('show')}>Platform</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#get-involved' onClick={() => document.getElementById('navbar-content').classList.remove('show')}>Get Involved</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#contact' onClick={() => document.getElementById('navbar-content').classList.remove('show')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}