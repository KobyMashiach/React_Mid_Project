import { useState, useEffect } from 'react';
import TodoComponentComp from './todo_component';
import PostComponentComp from './post_component';
import AddTodoComp from './add_todo';
import AddPostComp from './app_post';

function RightScreenSideComp({ user, onUpdate }) {

    const [addTodo, setAddTodo] = useState(false);
    const [addPost, setAddPost] = useState(false);

    const handleUpdateTodo = (todo) => {
        const index = user.todos.findIndex(t => t.id === todo.id);
        if (index !== -1) {
            const newTodos = [...user.todos];
            newTodos[index] = { ...todo, completed: true };
            const newUser = { ...user, todos: newTodos };
            onUpdate(newUser);
        }
    };
    const handleAddTodo = (title) => {
        const newTodos = [...user.todos];
        const id = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        newTodos.push({ id, title, completed: false })
        const newUser = { ...user, todos: newTodos };
        setAddTodo(false)
        onUpdate(newUser);
    };

    const handleAddPost = ({ title, body }) => {
        const newPosts = [...user.posts];
        const id = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        newPosts.push({ id, title, body })
        const newUser = { ...user, posts: newPosts };
        setAddPost(false)
        onUpdate(newUser);
    };

    return (
        <>
            <div >
                <div style={{ padding: "10px", display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                    Todos - {user.name}
                    {
                        !addTodo ? <button style={{ backgroundColor: "#ffe699" }} onClick={() => setAddTodo(true)}>Add</button> : null
                    }
                </div>

                <div style={{ border: 'solid 2px black', padding: "5px" }}>

                    {
                        !addTodo ? user.todos.map((todo, index) =>
                            <TodoComponentComp key={index} todo={todo} onUpdate={handleUpdateTodo} />
                        ) : <AddTodoComp
                            cancel={() => setAddTodo(false)}
                            addTodo={handleAddTodo}
                        />
                    }
                </div>

                <br /><br />

                <div style={{ padding: "10px", display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                    Posts - {user.name}

                    {
                        !addPost ? <button style={{ backgroundColor: "#ffe699" }} onClick={() => setAddPost(true)}>Add</button> : null
                    }
                </div>
                <div style={{ border: 'solid 2px black', padding: "5px" }}>

                    {
                        !addPost ? user.posts.map((post, index) =>
                            <PostComponentComp key={index} post={post} onUpdate={() => { }} />
                        ) : <AddPostComp
                            cancel={() => setAddPost(false)}
                            addPost={handleAddPost}
                        />
                    }
                </div>
            </div>
        </>
    );
}

export default RightScreenSideComp;