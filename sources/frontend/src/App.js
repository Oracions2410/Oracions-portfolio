import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home, Projects, Blog } from './containers'
import { Header, Footer, Blackout, ScrollTop, Popup } from './components'


const App = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [popupModal, setPopupModal] = useState(null)
    const [bodyBlackout, setBodyBlackout] = useState(null)

    const [projects, setProjects] = useState([
        {
            _id: 1,
            name: 'My Tube YouTube clone application',
            desc: 'YouTube clone application build with ReactJS and Youtube V3 API',
            imagepath: './images/proj.jpg',
            links:
            {
                repo: 'https://bitbucket.org',
                app: 'https://mytube-ora.netlify.com'
            },
            tech: [
                {
                    name: 'JavaScript',
                    desc: 'Script programing Language'
                }
            ],
            framework: [
                {
                    name: 'ReactJS',
                    desc: 'Frontend web framework'
                }
            ]
        },
        {
            _id: 2,
            name: 'Covid19',
            desc: 'Corora application tracker',
            imagepath: './images/blog.svg',
            links:
            {
                repo: 'https://bitbucket.org',
                app: 'https://covid19-ora.netlify.com'
            },
            tech: [
                {
                    name: 'JavaScript',
                    desc: 'Script programing Language'
                }
            ],
            framework: [
                {
                    name: 'ReactJS',
                    desc: 'Frontend web framework'
                }
            ]
        },
        {
            _id: 3,
            name: 'Skaikru',
            desc: 'Blank application build for client',
            imagepath: './images/original.jpg',
            links:
            {
                repo: 'https://bitbucket.org',
                app: 'https://covid19-ora.netlify.com'
            },
            tech: [
                {
                    name: 'Java',
                    desc: 'Script programing Language'
                },
                {
                    name: 'Node JS',
                    desc: 'Script programing Language'
                }
            ],
            framework: [
                {
                    name: 'Spring Boot',
                    desc: 'Frontend web framework'
                },
                {
                    name: 'Express',
                    desc: 'Frontend web framework'
                }
            ]
        }
    ])


    console.log(popupModal, bodyBlackout)
    const setProject = (project) => {
        console.log('------')
        bodyBlackout.classList.add('is-blackedout')
        popupModal.classList.add('is-visible')
        setSelectedProject(project)
    }

    return <BrowserRouter>


        <ScrollTop />

        <Header />

        <main>

            <Blackout setElement={setBodyBlackout} />
            <Popup setElement={setPopupModal} project={selectedProject} />

            <Route path='/' exact render={() => <Home projects={projects} select={setProject} />} />
            <Route path='/blog' component={Blog} />
            <Route path='/projects' render={() => <Projects projects={projects} select={setProject} />} />

        </main>

        <Footer />


    </BrowserRouter>
}

export default App;