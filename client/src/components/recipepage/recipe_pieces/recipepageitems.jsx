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

            const ingredients = val.ingredients
            const indentPoints = []
            for( let i = 0; i < ingredients.length ;i++) {
              if(ingredients[i] === "N" && ingredients[i + 4] === ":") {
                indentPoints.push(i + 4)
              }

              if(ingredients[i] ==="D" && ingredients[i + 11] === ":") {
                indentPoints.push(i + 11)
              }

              if(ingredients[i] === "T" && ingredients[i + 4] === ":") {
                indentPoints.push(i + 4)
              }

              if(ingredients[i] === "A" && ingredients[i + 6] === ":") {
                indentPoints.push(i + 11)
              }

            }
            console.log(indentPoints)
            return (
              <div key={key}>
                <h2>{val.dish_name}</h2>
                {} 
                <p></p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}


export default RecipePageItems