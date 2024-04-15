import React from 'react'
import { useParams } from 'react-router-dom'
import { charcoaldatabase } from '../Database/charcoalDatabase'
import { watercolorDatabase } from '../Database/watercolorDatabase'


const ArtDisplay = () => {
    const { id } = useParams()

  return (
    <div>
          <div>
            <p> {watercolorDatabase[id-1].description} </p>
            {watercolorDatabase[id-1].img}
          </div>
      
    </div>
  )
}

export default ArtDisplay