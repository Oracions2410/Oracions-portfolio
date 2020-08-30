import React from 'react'

const AboutMe = () => {
    return <React.Fragment>


        <section id="about" class="section about">

            <div class="section-head">
                <h3 class="section-title">About me</h3>
                <span class="underline"></span>
            </div>

            <div class="content">
                <div class="picture">
                    <a href="https://drive.google.com/uc?export=view&id=1ZdnYMg9NarwMTlxpAbY7tcDj6RCMKZfF" target="_blank">
                        <img src="https://drive.google.com/uc?export=view&id=1ZdnYMg9NarwMTlxpAbY7tcDj6RCMKZfF" alt="Oracions picture" />
                    </a>
                </div>

                <div class="info">
                    <div class="about-text">
                        My name is <span class="firstname">Louis-Mary</span>&nbsp;<span
                            class="lastname">MONJENGUE</span>
                        <p>I am a Fullstack web developer in Douala, Cameroon Central Africa. I have a passion for the design of effects and animation, programming in general as well as system administration under Linux.</p>
                    </div>

                    <div class="social-links">
                        <a target="_blank" href="https://www.facebook.com/louismary.monjengue.39"><img src="./images/icons/fb.svg" alt="Facebook" /></a>
                        <a target="_blank" href="https://twitter.com/Oracions2410"><img src="./images/icons/twitter.svg" alt="Twitter" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/louis-mary-monjengue-a73214182/"><img src="./images/icons/linkedin.svg" alt="Linkedin" /></a>
                        <a target="_blank" href="https://github.com/Oracions2410"><img src="./images/icons/github.svg" alt="Github" /></a>
                    </div>

                    <a href="#contact" class="btn contact-btn">Contact me</a>

                </div>
            </div>

        </section>

    </React.Fragment>
}

export default AboutMe