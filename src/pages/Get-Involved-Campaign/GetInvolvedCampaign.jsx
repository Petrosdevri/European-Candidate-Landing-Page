import { useRef, useState } from 'react';
import './GetInvolvedCampaign.css';

export default function GetInvolvedCampaign() {
    const emailRef = useRef('');
    const subjectRef = useRef('');
    const messageRef = useRef('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;
        console.log(`Message sent, Email: ${email} Subject: ${subject} Message: ${message}`);
        emailRef.current.value = '';
        subject.current.value = '';
        message.current.value = '';
    };


    return (
        <section className='get-involved-campaign d-flex flex-column justify-content-center align-items-center gap-5 p-5'>
            <h1 className='get-involved-campaign-header'>Get Involved</h1>
            <form className='form d-flex flex-column justify-content-center align-items-center gap-3' onSubmit={handleSubmit}>
                <input type='email' className='form-control' id='email' ref={emailRef} placeholder='Email Address' required />
                <input type='text' className='form-control' id='subject' ref={subjectRef} placeholder='Subject' required />
                <textarea type='text' className='form-control' id='message' ref={messageRef} placeholder='Message' rows={6} required />
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </section>
    )
}