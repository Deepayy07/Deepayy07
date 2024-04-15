import { useContext } from "react"
import NewUser from "./NewUser"
import { AppContext } from "../App"

export const User = () => {
const {user,setUser} = useContext(AppContext)
    return(
        <div>
            This is the page for {user}. <br/>
        
            <NewUser user = {user} setUser = {setUser}/>
        </div>
    )
}