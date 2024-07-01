import React from 'react';

const BlogPost = ({ post }) => {
    const handleShare = () => {
        // Implement sharing logic
        console.log('Share post:', post.title);
    };

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={handleShare}>Share</button>
        </div>
    );
};

export default BlogPost;
