import React from 'react'
import { Services, Tech, AboutMe, ProjectsSection, BlogSection } from '../components'

const Home = ({ projects, select }) => {
    return <React.Fragment>
        <div className="container">
            <Services />
            <Tech />
            <AboutMe />
            <ProjectsSection projects={projects} select={select} />
            <BlogSection />

        </div>

        <div class="motif">
            <img src="./images/motif.svg" alt="" />
        </div>


        <div class="white">
            <div class="container">



                <section id="contact" class="section contact">

                    <div class="section-head">
                        <h3 class="section-title">Contact</h3>
                        <span class="underline"></span>
                    </div>

                    <div class="form">
                        <input type="text" placeholder="Nom" />
                        <input class="email" type="email" placeholder="E-mail address" />
                        <textarea>Votre message</textarea>
                        <button class="btn btn-contact">Send</button>
                    </div>

                </section>



                <section class="section partenaires">

                    <div class="section-head">
                        <h3 class="section-title">Il me font confiance</h3>
                        <span class="underline"></span>
                    </div>

                    <div class="section-list partenaires">

                        <div class="section-list-item">
                            <img class="service-image" src="./images/Rectangle 70.png" alt="" />
                            <h4 class="service-title">Yves Tondje</h4>
                            <div class="service-desc">
                                Développer Java Senior
                            </div>
                        </div>

                        <div class="section-list-item">
                            <img class="service-image" src="./images/Rectangle 70.png" alt="" />
                            <h4 class="service-title">Yves Tondje</h4>
                            <div class="service-desc">
                                Développer Java Senior
                            </div>
                        </div>

                        <div class="section-list-item">
                            <img class="service-image" src="./images/Rectangle 70.png" alt="" />
                            <h4 class="service-title">Yves Tondje</h4>
                            <div class="service-desc">
                                Développer Java Senior
                            </div>
                        </div>

                        <div class="section-list-item">
                            <img class="service-image" src="./images/Rectangle 70.png" alt="" />
                            <h4 class="service-title">Yves Tondje Yves Tondje Yves Tondje</h4>
                            <div class="service-desc">
                                Développer Java Senior
                            </div>
                        </div>


                    </div>

                </section>



            </div>
        </div>

    </React.Fragment>
}

export default Home