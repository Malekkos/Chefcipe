import axios from "axios"

import React, { useState, useEffect } from "react"



const RecipePageItems = () => {


  const [prevData, setPrevData] = useState([])
  const [keys, setKeys] = useState("")
  // const [values, setValues] = useState("")

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/recipes/")
      .then(res => {
        setPrevData(res.data)
        // console.log("log for data in recipepageitesm.jsx: ", Object.values(res.data[0]))
        setKeys(Object.keys(res.data[0]))
      })
  }, [])


  console.log(keys)
  return (
    <>
      <div id="itemsWrapper">
        {
          prevData.map(val => {


            console.log(val.dish_name)
            let newVal = [val]

            return (
              keys.map((keys, key) => {
                // console.log("this is the keys in in map :", keys)
                
                if(keys === "dish_name") {
                  // console.log("made it to dish_name")
                  return(
                    <>
                      <h2>{val[keys]}</h2>
                    </>
                  )
                } else if (keys === "ingredients") {
                  // console.log("made it to ingredients")
                  
                  let ingredients = val[keys]
                  console.log(ingredients)
                  for( let i = 0; i < ingredients.length ;i++) {
                    if(ingredients[i] === ":") {
                      ingredients = ingredients.split("")
                      ingredients.splice(i, 1, "<br />")
                      ingredients = ingredients.join("")
                    }
                    if(ingredients[i] === "I" && ingredients[i + 9] === "t") {
                      console.log("AHAHA")
                      ingredients = ingredients.split("")
                      ingredients.splice(i, 0, "<br />")
                      ingredients = ingredients.join("")
                      i++
                      i++
                      i++
                      i++
                      i++
                      i++
                    }
                  }
                  let newIngredients = new DOMParser().parseFromString(`<div className="itemsIngredientsWrapper">${ingredients}</div>`, "text/html")
                  let arrayIngredients = (newIngredients.firstChild.lastChild.firstChild.innerHTML)


                  console.log(arrayIngredients)
                  return(
                    <>
                      {/* {arrayIngredients} */}
                      <div className="itemsIngredientsWrapper" dangerouslySetInnerHTML={{__html: arrayIngredients}}></div>
                    </>
                  )
                } else {
                  // console.log("made it to steps")
                  return(
                    <>
                      <p>steps</p>
                    </>
                  )
                }
              
              })
            )
            // console.log(val)
            // console.log(JSON.stringify(`${<br />}`))
            // if(val === val.dish_name) {
            // return (
            // <></>
            // )
            // } else {
            // return (
            // <></>
            // )
            // }


            // return (
            // <div key={key}>
            // <h2>{val.dish_name}</h2>
            // <p>{`${[<br />]}`}{ingredients}</p>
            // </div>
            // )
          })
        }
      </div>
    </>
  )
}


export default RecipePageItems