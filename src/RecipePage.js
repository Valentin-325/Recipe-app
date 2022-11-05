import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './recipe.css'

function RecipePage() {

    let params = useParams()
    const [info, setInfo] = useState({})
    let getBack = useNavigate()

    const fetchDetails = async () => {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await recipes.json();
        setInfo(detailData)
    }

    useEffect(() => {
        fetchDetails()
      }, [params.name])

  return (
    <div className="container">
        <button onClick={() => {
            getBack(-1)
        }}>
        Go Back
        </button>
        <div className="information">
            <div className='left'>
                <img src={info.image} alt={info.title} />
                <h1>{info.title}</h1>
            </div>
            <div className="right">
                <p dangerouslySetInnerHTML={{__html: info.summary}}></p>
                <p dangerouslySetInnerHTML={{__html: info.instructions}}></p>
            </div>
        </div>

    </div>
  )
}

export default RecipePage