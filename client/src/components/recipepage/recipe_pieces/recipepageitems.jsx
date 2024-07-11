import axios from "axios"

import React, { useState, useEffect } from "react"



const RecipePageItems = () => {


  const [prevData, setPrevData] = useState([])
  const [keys, setKeys] = useState("")

  useEffect(() => {
    axios.get("http://52.9.203.72:8000/recipes/")
      .then(res => {
        setPrevData(res.data)
        setKeys(Object.keys(res.data[0]))
      })
  }, [])

  return (
    <>
      <div id="recipeItemsWrapper">
        <div id="itemsWrapper">
          {
            prevData.map(val => {
              return (
                keys.map((keys) => {
                  if (keys === "dish_name") {
                    return (
                      <>
                        <h2>{val[keys]}</h2>
                      </>
                    )
                  } else if (keys === "ingredients") {
                    let ingredients = val[keys]
                    let changeElement = "<p className='itemInner'>"
                    for (let i = 0; i < ingredients.length; i++) {
                      if (ingredients[i] === ":") {
                        ingredients = ingredients.split("")
                        ingredients.splice(i, 1, "<br />")
                        ingredients = ingredients.join("")
                      }
                      
                      if ( i !== 0 && ingredients[i] === "I" && ingredients[i + 9] ==="t") {
                        console.log("found")
                        console.log(i)
                        ingredients = ingredients.split("")
                        ingredients.splice(i, 0, "<p />")
                        ingredients = ingredients.join("")
                        i++
                        i++
                        i++
                        i++
                        i++
                      }

                      if (ingredients[i] === "I" && ingredients[i + 12] === "e") {
                        ingredients = ingredients.split("")
                        ingredients.splice(ingredients[i], 0, changeElement)
                        ingredients = ingredients.join("")
                        for(let length = 0; length < 27; length++) {
                          i++
                        }
                      }

                      if (ingredients[i] === "I" && ingredients[i + 21] === "n") {
                        ingredients = ingredients.split("")
                        ingredients.splice(i, 0, changeElement)
                        ingredients = ingredients.join("")
                        for(let length = 0; length < 31; length++) {
                          i++
                        }
                      }

                      if (ingredients[i] === "I" && ingredients[i + 32] === "e") {
                        ingredients = ingredients.split("")                        
                        ingredients.splice(i, 0, changeElement)
                        ingredients = ingredients.join("")
                        for(let length = 0; length < 31; length++) {
                          i++
                        }
                      }

                      if(ingredients[i] === "I" && ingredients[i + 37] === "t") {
                        ingredients = ingredients.split("")
                        ingredients.splice(i, 0, changeElement)
                        ingredients = ingredients.join("")
                        for(let length = 0; length < 31; length++) {
                          i++
                        }
                      }
                    }

                    let newIngredients = new DOMParser().parseFromString(`<div className="itemsIngredientsWrapr">${ingredients}</div>`, "text/html")
                    let arrayIngredients = (newIngredients.firstChild.lastChild.firstChild.innerHTML)
                    return (
                        <div className="itemsIngredientsWrapper" dangerouslySetInnerHTML={{ __html: `<p>${arrayIngredients}</p>` }}>
                        </div>
                    )
                  } else {

                    return (
                      <>
                        <p>steps</p>
                      </>
                    )
                  }
                })
              )
            })
          }
        </div>
      </div>
    </>
  )
}


export default RecipePageItems