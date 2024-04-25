import './Home.css';
import About from './About/About';
import Header from './Header/Header';
import GetInvolved from './Get-Involved/GetInvolved';
import Platform from './Platform/Platform';

export default function Home() {
    return (
        <section className='home d-flex flex-column justify-content-center align-items-center'>
            <Header />
            <About />
            <Platform />
            <GetInvolved />
        </section>
    )
}