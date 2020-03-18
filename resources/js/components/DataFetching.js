import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching(){
    const [ user, setUser] = useState({})
    const [id, setId] = useState(1)
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)


    const handleClick = () => {
        setIdFromButtonClick(id)
    } 

    useEffect (() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( res => {
            console.log(res)
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    return (
        <div>
         
            <input 
                type = "text" value = {id} onChange= {e =>setId(e.target.value)}
            />

            <button type="button" onClick={handleClick}>
                Fetch User
            </button>
           <div>{user.name}</div> 
           <div>Username : {user.username}</div> 
           <div>Email {user.email}</div> 
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
          
        </div>
    )

}

export default DataFetching