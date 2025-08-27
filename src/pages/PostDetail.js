import React from 'react';
import PostItem from '../components/PostItem';

const PostDetail = ({ post }) => {
    return (
        <div>
            <h1>게시글 상세</h1>
            <PostItem post={post} />
        </div>
    );
};

export default PostDetail;
