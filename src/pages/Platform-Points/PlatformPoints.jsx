import './PlatformPoints.css';

export default function PlatformPoints() {
    return (
        <section className='platform-points d-flex flex-column justify-content-center align-items-center gap-4 p-5'>
            <h1 className='platform-header'>Platform</h1>
            <section className='points d-flex flex-column justify-content-center align-items-center gap-5'>
                <h1 className='platform-points-header'>National Sovereignty</h1>
                <ul className='points-list d-flex flex-column justify-content-center align-items-center gap-2'>
                    <li>Implement strict controls on immigration to regulate the influx of migrants into Europe.</li>
                    <li>Enhance stricter border security measures to prevent illegal immigration and human trafficking.</li>
                    <li>Promote policies that preserve and celebrate Europe's cultural heritage, traditions, and values.</li>
                </ul>   
            </section>
            <section className='points d-flex flex-column justify-content-center align-items-center gap-3'>
                <h1 className='platform-header'>European Cooperation</h1>
                <ul className='points-list d-flex flex-column justify-content-center align-items-center gap-2'>
                    <li>Advocate for policies that foster dialogue, consensus-building, and mutual understanding among European nations, 
                        while respecting their sovereignty and right to self-determination.</li>
                    <li>Champion policies that respect the diverse cultural, linguistic, and historical identities of European nations, 
                        recognizing that unity does not necessitate homogeneity.</li>
                    <li>Oppose efforts to impose one-size-fits-all solutions on member states, and instead, 
                        promote a flexible and inclusive approach to European cooperation that accommodates the unique needs and preferences of each nation.</li>
                </ul>   
            </section>
            <section className='points d-flex flex-column justify-content-center align-items-center gap-3'>
                <h1 className='platform-header'>Rule of Law</h1>
                <ul className='points-list d-flex flex-column justify-content-center align-items-center gap-2'>
                    <li>Advocate for the direct election of the President of the European Commission by the citizens of the European Union.</li>
                    <li>Propose reforms to amend the European treaties to establish procedures for the direct election of the Commission President, 
                        ensuring that candidates represent diverse political ideologies and are accountable to the European electorate.</li>
                    <li>Introduce measures to improve the transparency of the European Commission's decision-making processes,
                        including the publication of meeting agendas, minutes, and documents related to legislative proposals.</li>
                    <li>Advocate for enhanced access to information for citizens and stakeholders,
                        enabling greater scrutiny of EU policies and initiatives and fostering accountability for Commission officials.</li>
                    <li>Propose reforms to strengthen the role of the European Parliament in overseeing the Commission's activities,
                        including the establishment of mechanisms for parliamentary inquiries, hearings, and the evaluation of Commissioners' performance.</li>
                </ul>   
            </section>
        </section>
    )
}