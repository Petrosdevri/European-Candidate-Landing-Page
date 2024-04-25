import './Platform.css';
import PlatformPoint from './PlatformPoint';
import EuropeanUnion from '../../../assets/icons/european-union.png';
import Germany from '../../../assets/icons/germany.png';
import Parliament from '../../../assets/icons/parliament.png';

export default function Platform() {
    return (
        <section className='platform d-flex flex-column justify-content-center align-items-center gap-5 p-5' id='platform'>
            <h3 className='platform-header'>Platform</h3>
            <p>Marco Eiffel stands firm on issues such as immigration reform, national sovereignty, and economic revitalization. 
                Reclaiming national identity and encouraging participation in democratic instruments is going to ensure a brighter future for Europe.</p>
            <section className='platform-points d-flex justify-content-center align-items-center gap-3'>
                <PlatformPoint image={Germany} title='National Sovereignty' description='Germany is our nation and its identity must be preserved in the forecoming centuries. The uncontrolled mass immigration policy must come to an end and its threats must be dealt immediately.' />
                <PlatformPoint image={EuropeanUnion} title='European Cooperation' description='Member States should be able to take their own decisions in certain fields. No bureaucrat from Brussels should strip democratically-elected governments of its own powers.' />
                <PlatformPoint image={Parliament} title='Rule of Law' description={`The democratic deficit of the EU should be eliminated with the direct election of the head of the European Commission and measures to improve the Commission's transparency. `} />
            </section>
            <button className='read-btn'><a href='/platform-points'>Read More</a></button>
        </section>
    )
}