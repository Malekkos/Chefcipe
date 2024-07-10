import axios from "axios"

import React, { useState, useEffect } from "react"



const RecipePageItems = () => {


  const [prevData, setPrevData] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/recipes/")
    .then(res => {
      setPrevData(res.data)
    })
  }, [])

  // console.log("log for data in recipepageitesm.jsx: ", itemData)


  return (
    <>
      <div id="itemsWrapper">
        {
          prevData.map((val, key) => {

            let ingredients = val.ingredients
            for( let i = 0; i < ingredients.length ;i++) {
              if(ingredients[i] === ":") {
                ingredients = ingredients.split("")
                ingredients.splice(i, 1, `<br />`)
                ingredients = ingredients.join("")
              }
            }
            return (
              <div key={key}>
                <h2>{val.dish_name}</h2>
                <p>{ingredients}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}


export default RecipePageItems