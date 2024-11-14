import { useState, useEffect } from 'react';

function AddTodoComp({ cancel, addTodo }) {

    const [title, setTitle] = useState();


    return (
        <>
            Title: <input type='text' onChange={(e) => setTitle(e.target.value)}></input>
            <br /><br />
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button style={{ backgroundColor: "#ffe699" }} onClick={cancel}>Cancel</button>
                <button style={{ backgroundColor: "#ffe699" }} onClick={() => addTodo(title)}>Add</button>
            </div>
        </>
    );
}

export default AddTodoComp;