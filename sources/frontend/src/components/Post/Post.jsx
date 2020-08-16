import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import marked from 'marked'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)


    useEffect(() => {
        try {
            const postContent = require(`../../assets/posts/post${id}.md`)

            if (postContent) {
                fetch(postContent)
                    .then(response => {
                        return response.text()
                    })
                    .then(text => {
                        setPost(marked(text))
                    })
            }
        } catch (err) {
            setPost('AUCUN ARTICLE TROUVÉ !')
        }


    }, [])


    return <React.Fragment>
        <article style={{ marginBottom: '8rem', padding: '2rem', backgroundColor: 'white', color: '#616161' }}
            dangerouslySetInnerHTML={{ __html: post }}
        >

        </article>
    </React.Fragment>
}

export default Post