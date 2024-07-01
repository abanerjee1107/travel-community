const Blog = ({ blog }) => (
  <div>
    <h2>{blog.title}</h2>
    <p>{blog.content}</p>
    <small>By {blog.authorName}</small>
  </div>
);

export default Blog;
