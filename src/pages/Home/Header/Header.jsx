import './Header.css';
import MarcoEiffel from '../../../assets/images/marco-eiffel.png';

export default function Header() {
    return (
        <header>
            <img src={MarcoEiffel} className='header-image' width='100%' height='100%' alt='marco-eiffel' />
            <div className='header-text'>
                <h1>Welcome to Marco Eiffel's Campaign for a Strong Europe</h1>
                <h2>Building a Future of Prosperity and Sovereignty for All Europeans</h2>
            </div>
        </header>
    )
}