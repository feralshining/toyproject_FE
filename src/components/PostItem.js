import React from 'react';

const PostItem = ({ post }) => {
    // 게시글 아이템 렌더링
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
};

export default PostItem;
