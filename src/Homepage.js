import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import './Homepage.css'

import React from 'react'

function Homepage() {

    const [recipe, setRecipe] = useState([])
    let history = useNavigate()

    useEffect(() => {
        getRecipe()
    }, [])


    const getRecipe = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json()
        setRecipe(data.recipes)
    }


  return (
    <div className='Box'>
        {recipe.map((index)=> {
            return(
                <div className="randomBox" key={index.id}>
                    
                        <img src={index.image} alt="" />

                        <div className="right">
                            <h1>{index.title}</h1>

        
                            <button 
                                onClick={() => {
                                history('/recipe/' + index.id)
                            }}>
                                View Recipe
                            </button>
                        </div>
                </div>
            )
        })}
    </div>
  )
}

export default Homepage