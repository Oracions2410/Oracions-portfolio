import React from 'react'

const Contact = () => {
    return <React.Fragment>


        <section id="contact" class="section contact">

            <div class="section-head">
                <h3 class="section-title">Contact</h3>
                <span class="underline"></span>
            </div>

            <div class="form">
                <input type="text" placeholder="Your name" />
                <input class="email" type="email" placeholder="Email Address" />
                <textarea>Write your message</textarea>
                <button disabled class="btn btn-contact">Send</button>
            </div>

        </section>

    </React.Fragment>
}

export default Contact