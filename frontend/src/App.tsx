import { useEffect, useState } from "react";
import "./App.css";
import { Blog } from "./types";

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const showAlert = () => {
    alert("bonjour");
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>all blogs</h1>
        {blogs && blogs.map((blog) => <div key={blog.id}>{blog.title}</div>)}
        <button onClick={showAlert}>Show Alert</button>
      </header>
    </div>
  );
}

export default App;
