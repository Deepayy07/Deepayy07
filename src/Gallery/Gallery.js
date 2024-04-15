import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export const Gallery = () => {
    const navigate = useNavigate()
    const {user} = useContext(AppContext)
    
    return(
        <div className=""> 
            <div className="container">
                <Link to="charcoal"> Charcoal & Graphite Portraits</Link>
                <Link to="watercolor"> Water color Portraits</Link>
                <Link to="landscape"> Landscapes</Link>
            </div>

            <Outlet />

            <div>
            <br/><button onClick={() => {navigate("/OrderPage")}}> Place an order </button>
            <p>Note: You'll be ordering through the user {user}</p>
            </div>
            

        </div>
    )
}