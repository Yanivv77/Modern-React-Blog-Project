import { useState, useEffect } from 'react'
import BlogList from './Reusable/BlogList'

function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'moshe', id: 2 },
    { title: 'Web top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effect run')
  }, [])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  )
}

export default Home
