import { useState, useEffect } from 'react'
import BlogList from './Reusable/BlogList'

function Home() {
  const [blogs, setBlogs] = useState(null)
  const [IsPending, setIsPending] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
        setIsPending(false)
      })
      .catch((err) => {
        console.log()
      })
  }, [])

  return (
    <div className="home">
      {IsPending && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  )
}

export default Home
