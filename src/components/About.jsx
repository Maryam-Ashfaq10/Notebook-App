import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)
  
  return (
    <div>
      <h1>about us:</h1>
      <p>created by {a.name} </p>
      <p>lives in {a.lives} </p>

    </div>
  )
}

export default About
