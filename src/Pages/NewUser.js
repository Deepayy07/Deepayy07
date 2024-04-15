import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const NewUser = () => {
    const {setUser} = useContext(AppContext)
    const [newUser, setNewUser] = useState("")
  
  return (
    <div>
        <input placeholder='Eg:Deepnav' onChange={(event) =>{setNewUser(event.target.value)}}></input>
        <button onClick={() => {setUser(newUser)}}>Change Username</button>
    </div>
  )
}

export default NewUser