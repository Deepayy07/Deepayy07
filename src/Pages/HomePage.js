import React, { useContext, useState} from "react";
import {useNavigate,Link} from "react-router-dom"
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const  HomePage = () => {
    const navigate = useNavigate()
    const {user} = useContext(AppContext)

    const {data:emaildata, isLoading, isError, refetch } = useQuery({
        queryKey: ["emails"],
        queryFn: () => {
            return axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.data)

        },
        refetchInterval: 1000
     })

    const randomNumber = Math.floor(Math.random() * 100) + 1

    if(isLoading) {
        return <h1>Loading ...</h1>}

    if(isError) {
        return <h1>Sorry, the data could not be fetched from the API.</h1>}
   
    return(
        <div>
            Welcome to Deepayy Arts. <br/>
            Currently, you are viewing this page as {user}. If you want to change it, 
            <Link to ="/User"> Click here</Link>.
            or <button onClick={() => {navigate("/User")}}>Click Here</button> <br/>
            This page was last used by {emaildata?.[randomNumber].email} <br/>
            <button onClick={() => refetch}> Update Latest User </button>
        </div>
    )
}