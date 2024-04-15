import React from "react";
import "../style.css"
import { watercolorDatabase } from "../Database/watercolorDatabase";
import { Navigate, useNavigate } from "react-router-dom";
import ArtDisplay from "./ArtDisplay";

export const WaterColor = () => {
    const Navigate = useNavigate()

    return(
        <div>
            WaterColor Portraits
                <div className="arts">
                    {watercolorDatabase.map((art) => {
                        return(
                            <div 
                                onClick={() => {Navigate(`/Gallery/${art.id}`)}}>
                                <p> Description:{art.description} </p>
                                <img src={art.img} alt="sketch" className="art-image"/>
                            </div>
                        )
                    })}
                </div>

        </div>
    )
}