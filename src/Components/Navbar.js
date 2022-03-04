function Navbar() {
  return (
    <nav className="navbar">
      <h1>Yaniv Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a className="navbarEnd" href="/create">
          New Blog
        </a>
      </div>
    </nav>
  )
}

export default Navbar
