import { useState, useEffect } from 'react';
import Blog from '../../components/Blog';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
