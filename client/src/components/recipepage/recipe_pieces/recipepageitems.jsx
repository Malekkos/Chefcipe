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
            const indentPoints = []
            for( let i = 0; i < ingredients.length ;i++) {
              if(ingredients[i] === ":") {
                // console.log("running")
                // console.log("ingredients before: ", ingredients)
                ingredients = ingredients.split("")
                // console.log("ingredients: ", ingredients)
                ingredients.splice(i, 1, `<br />`)
                console.log("before", ingredients)
                ingredients = ingredients.join("")
                console.log("after", ingredients)
              }
              // ingredients.join("")

              // if(ingredients[i + 11] === ":") {
              //   indentPoints.push(i + 11)
              // }

              // if(ingredients[i + 4] === ":") {
              //   indentPoints.push(i + 4)
              // }

              // if(ingredients[i + 6] === ":") {
              //   indentPoints.push(i + 11)
              // }
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