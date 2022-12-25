import axios from "axios"
import PageContainer from "components/PageContainer"
import { useEffect, useState } from "react"

function PostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        return () => {
            console.log('component oldu getdi')
            setPosts([])
        }
    }, [])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => {
                setPosts(resp.data)
            })
    }, [])


    useEffect(() => {
        console.log(posts)
    }, [posts])

    return (
        <PageContainer>
            <div style={{ height: 600, overflowY: "scroll" }}>
                {
                    posts.map((post) => {
                        return <p key={post.id}>{post.id}. {post.title}</p>
                    })
                }
            </div>
        </PageContainer>
    )
}

export default PostsPage