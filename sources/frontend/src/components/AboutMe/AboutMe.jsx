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
                    <a href="" target="_blank">
                        <img src="./images/IMG_20200813_102019.jpg" alt="Oracions picture" />
                    </a>
                </div>

                <div class="info">
                    <div class="about-text">
                        Mon nom est <span class="firstname">Louis-Mary</span>&nbsp;<span
                            class="lastname">MONJENGUE</span>
                        <p>Je suis développeur web full stack à Douala, Cameroun afrique centrale. J'ai une passion
                        pour
                        le
                        design des effets et animations, la programation de manière générale ainsi que
                        l'administration
                système sous Linux.</p>
                    </div>

                    <div class="social-links">
                        <img src="./images/icons/fb.svg" alt="Facebook" />
                        <img src="./images/icons/twitter.svg" alt="Twitter" />
                        <img src="./images/icons/linkedin.svg" alt="Linkedin" />
                        <img src="./images/icons/github.svg" alt="Github" />
                    </div>

                    <a href="#contact" class="btn contact-btn">Contact me</a>

                </div>
            </div>

        </section>

    </React.Fragment>
}

export default AboutMe