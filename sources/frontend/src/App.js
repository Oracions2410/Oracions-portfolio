import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home, Projects, Blog } from './containers'
import { Header, Footer, Blackout, ScrollTop, Popup } from './components'
import fechedPosts from './assets/posts/posts'
import fechedProjects from './assets/projects/projects'


const App = ({ location }) => {

    const [selectedProject, setSelectedProject] = useState(null)
    const [popupModal, setPopupModal] = useState(null)
    const [bodyBlackout, setBodyBlackout] = useState(null)
    const [projects, setProjects] = useState([])
    const [posts, setPosts] = useState([])


    useEffect(() => {
        function findPosts() {
            console.log('feched postssssssss', fechedPosts)
            setPosts(fechedPosts)
        }
        function findProjects() {
            setProjects(fechedProjects)
        }
        findProjects()
        findPosts()

    }, []);


    const setProject = (project) => {
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

            <Route path='/' exact render={() => <Home projects={projects} select={setProject} posts={posts} />} />
            <Route path='/home' exact render={() => <Home projects={projects} select={setProject} posts={posts} />} />
            <Route path='/blog' render={() => <Blog posts={posts} />} />
            <Route path='/projects' render={() => <Projects projects={projects} select={setProject} />} />

        </main>

        <Footer />


    </BrowserRouter>
}

export default App;