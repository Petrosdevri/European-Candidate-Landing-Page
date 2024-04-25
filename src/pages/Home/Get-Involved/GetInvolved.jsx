import './GetInvolved.css';

export default function GetInvolved() {
    return (
        <section className='get-involved d-flex flex-column justify-content-center align-items-center gap-5 p-5' id='get-involved'>
            <h3 className='get-involved-header'>Get Involved!</h3>
            <p>Make a difference by joining Marco Eiffel's campaign. Volunteer your time, or spread the word on social media.</p>
            <button className='get-involved-btn read-btn'><a href='/get-involved'>Get Involved</a></button>
        </section>
    )
}