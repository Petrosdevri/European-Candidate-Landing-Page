import './About.css';
import MarcoEiffelPortrait from '../../../assets/images/marco-eiffel-portrait.png';

export default function About() {
    return (
        <section className='about d-flex flex-column justify-content-center align-items-center gap-5 p-5' id='about'>
            <h3 className='about-header'>Background</h3>
            <section className='d-flex justify-content-center align-items-center gap-5'>
                <p>Marco Eiffel is a dedicated advocate for the values of sovereignty, security, and prosperity. 
                    With a background in the army and the real estate sector, Marco brings a unique perspective to the European Parliament.</p>
                <img src={MarcoEiffelPortrait} className='about-portrait' alt='marco-eiffel-portrait' />
            </section>
            <button className='read-btn'><a href='/about-marco'>Read More</a></button>
        </section>
    )
}