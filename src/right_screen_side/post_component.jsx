import { useState, useEffect } from 'react';

function PostComponentComp({ post, onUpdate }) {
    return (
        <>
            <div style={{ border: 'solid 2px #8852b0', padding: "10px", display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>

                Title: {post.title}<br /><br />
                Body: {post.body}

            </div>
            <br />
        </>
    );
}

export default PostComponentComp;