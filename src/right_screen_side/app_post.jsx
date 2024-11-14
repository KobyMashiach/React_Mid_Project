import { useState, useEffect } from 'react';

function AddPostComp({ cancel, addPost }) {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();


    return (
        <>
            Title: <input type='text' onChange={(e) => setTitle(e.target.value)}></input><br /><br />
            Body: <input type='body' onChange={(e) => setBody(e.target.value)}></input>
            <br /><br />
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button style={{ backgroundColor: "#ffe699" }} onClick={cancel}>Cancel</button>
                <button style={{ backgroundColor: "#ffe699" }} onClick={() => addPost({ title, body })}>Add</button>
            </div>
        </>
    );
}

export default AddPostComp;