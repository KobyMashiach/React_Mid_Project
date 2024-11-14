import { useState, useEffect } from 'react'
import './App.css'


import axios from 'axios'
import LeftScreenSideComp from './left_screen_side/left_screen_side'
import RightScreenSideComp from './right_screen_side/right_screen_side'
import AddUserComp from './right_screen_side/add_user'


const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

function App() {

  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState();

  const [onAddUser, setOnAddUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data: usersData } = await axios.get(USERS_URL)
      const { data: todosData } = await axios.get(TODOS_URL)
      const { data: postsData } = await axios.get(POSTS_URL)

      const tempUsers = [];
      usersData.map(({ id, name, email, address }) => {
        let obj = { id, name, email, address, todos: [], posts: [] }

        const todosTempData = todosData.filter((todo) => todo.userId == id);
        todosTempData.map(({ id, title, completed }) => {
          obj.todos.push({ id, title, completed });
        })

        const postsTempData = postsData.filter((post) => post.userId == id);
        postsTempData.map(({ id, title, body }) => {
          obj.posts.push({ id, title, body });
        })


        tempUsers.push(obj)
      })
      setUsers(tempUsers)
    }

    fetchData();

  }, []);

  const onDelete = (user) => {
    const index = users.findIndex((us => us.id == user.id))
    if (index != -1) {
      setUsers(users.filter(us => us.id !== user.id))
    }
  }


  const onUpdate = (user) => {
    const index = users.findIndex((us => us.id == user.id))
    if (index != -1) {
      let updatedUsers = [...users]
      updatedUsers[index] = user
      setUsers(updatedUsers)
    }
  }

  const handleAddUser = ({ name, email }) => {
    let updatedUsers = [...users]
    const id = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    updatedUsers.push({ id, name, email, todos: [], posts: [] })
    setUsers(updatedUsers)
    setOnAddUser(false)
  }


  return (
    <>
      <div id='main_div' style={onAddUser ? { justifyContent: 'flex-start' } : null}>
        <LeftScreenSideComp
          users={users}
          selectedId={selectedId}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onSelectId={(id) => setSelectedId(id)}
          onAddUser={() => {
            setOnAddUser(true)
            setSelectedId()
          }}
        />

        {!onAddUser && selectedId && <RightScreenSideComp
          user={users.find(user => user.id == selectedId)}
          onUpdate={onUpdate}
        />}
        {onAddUser && <div style={{ border: 'solid 2px black', padding: "5px", height: "150px" }}>
          <AddUserComp
            cancel={() => setOnAddUser(false)}
            addUser={handleAddUser}
          />
        </div>}
      </div>
    </>
  )
}

export default App
