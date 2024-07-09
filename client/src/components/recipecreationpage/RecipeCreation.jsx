
import React, { useState } from "react"

import "../../styles/Recipe.scss"


const RecipeCreationPage = () => {

  const [recipe, setRecipe] = useState()
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([
    { name: "", desc: ""},
    { name: "", desc: ""},
    { name: "", desc: ""},
  ])
  const [steps, setSteps] = useState([
    { name: "", desc: "", },
  ])

  console.log(ingredients)

  const handleChange = (event) => {
    // const target = event.target.parentElement
    // console.log(target)
    // console.dir(event.target)
    // const target = event.target.parentElement

    // console.dir(target.attributes[0].nodeValue)
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "items":
        const target = event.target.parentElement
        console.log("curr", [ingredients[target.attributes[0].nodeValue].name])
        console.log(event.target.placeholder)
        setIngredients(
          ...ingredients,
          // [
            {name: event.target.value}
          )
        break;
      default:
        console.log("how did this happen?")
        return
    }
  }

  return (
    <main id="recipeCreationMainWrapper">
      <h1>Create your recipe!</h1>
      <form id="recipeCreationForm">
        <div id="dishNameWrapper">
          <div>
            <p id="dishNameTitle"><em>Name your Dish!</em></p>
            <input id="dishName" name="name" type="text" value={name} onChange={(event) => handleChange(event)} placeholder="Dish name..." />
          </div>
          <input id="dishNameButton" type="button" value="Clear" />
        </div>
        <div className="divider"></div>
        <div id="dishItemsWrapper">
          <div id="dishItemsSubWrapper">
            <p id="dishItemsTitle"><em>Give your dish some items</em></p>
            <input id="dishItemsCreateButton" type="button" value="Create" />
          </div>
          {
            ingredients.map((val, key) => {
              return (
                <div name={key} className="itemsWrapper">
                  <input className="left itemGeneral" name="items" type="text" value={val.name} onChange={(event) => handleChange(event)} placeholder="name" />
                  <input className="right itemGeneral" name="items" type="text" value={val.desc} onChange={(event) => handleChange(event)} placeholder="desc" />
                  {/* <input className="itemGeneral" name="items" type="text" value={val.type} onChange={(event) => handleChange(event)} placeholder="type" /> */}
                  {/* <input className="right itemGeneral" name="items" type="number" value={val.typeNum} onChange={(event) => handleChange(event)} placeholder="typeNum" /> */}
                  {key + 1 === 1 ? "" : <input className="dishItemDeleteButton" type="button" value="X" />}
                </div>
              )
            })
          }
        </div>
        <div className="divider"></div>
        <div id="dishStepsWrapper">
          <div id="dishStepsSubWrapper">
            <p id="dishStepsTitle"><em>Give your dish some steps</em></p>
            <input id="dishStepsCreateButton" type="button" value="Create" />
          </div>
          {
            steps.map((val, key) => {
              return (
                <>
                  <div className="stepsWrapper">
                    <p className="stepsNum">{key + 1}</p>
                    <input className="stepName left" type="text" value={val.name} placeholder="Step name..." />
                    <textarea className="stepDesc right" type="tex" value={val.desc} placeholder="Step description..." />
                    {key + 1 === 1 ? "" : <input className="dishStepsDeleteButton" type="button" value="X" />}
                  </div>
                </>
              )
            })
          }
        </div>
        <input id="recipeSubmitButton" type="submit" value="Post Recipe!" />
      </form>
    </main>
  )
}




export default RecipeCreationPage