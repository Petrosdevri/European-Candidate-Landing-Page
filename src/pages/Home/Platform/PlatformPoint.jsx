export default function PlatformPoint(props) {
    return (
        <section className='platform-point d-flex flex-column justify-content-center align-items-center gap-4 p-3'>
            <div className='image-wrapper d-flex justify-content-center align-items-center p-4'>
                <img src={props.image} className='card-img-top' alt='platform-point' />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                <h3>{props.title}</h3>
                <p >{props.description}</p>
            </div>
        </section>
    )
}