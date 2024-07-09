
import React, { useState } from "react"

import "../../styles/Recipe.scss"


const RecipeCreationPage = () => {

  const [recipe, setRecipe] = useState()
  const [steps, setSteps] = useState([
    { name: "", desc: "",},
  ])
  const [ingredients, setIngredients] = useState([
    { name: "", desc: "", type: "", typeNum: "" },
  ])

  return (
    <main id="recipeCreationMainWrapper">
      <h1>Create your recipe!</h1>
      <form id="recipeCreationForm">
        <div id="dishNameWrapper">
          <div>
            <p id="dishNameTitle"><em>Name your Dish!</em></p>
            <input id="dishName" type="text" value="" placeholder="Dish name..." />
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
              console.log("this is the value: ", val)
              console.log("this is the key: ", key)
              return (
                <div className="itemsWrapper">
                  <input className="left itemGeneral" type="text" value={val.name} placeholder="Item name..." />
                  <input className="itemGeneral" type="text" value={val.desc} placeholder="Item desc...(optional)" />
                  <div className="itemQuantityWrapper">
                    <input className="itemGeneral" type="text" value={val.type} placeholder="Item type, eg. cups, oz" />
                    <input className="right itemGeneral" type="number" value={val.typeNum} placeholder="Amount..." />
                  </div>
                  <input className="dishItemDeleteButton" type="button" value="X" />
                </div>
              )
            })
          }
        </div>
        <div className="divider"></div>
        <div id="dishStepsWrapper">
          <div id="dishStepsSubWrapper">
            <p id="dishStepsTitle"><em>Give your dish some steps</em></p>
            <input id="dishStepsCreateButton" type="button" value="Create"/>
          </div>
          {
            steps.map((val, key) => {
              console.log("this is the val: ", val)
              console.log("this is the key: ", key)

              return(
                <>
                <div className="stepsWrapper">
                  <p className="stepsNum">{key + 1}</p>
                  <input className="stepName left" type="text" value={val.name} placeholder="Step name..."/>
                  <textarea className="stepDesc right" type="tex" value={val.desc} placeholder="Step description..."/>
                  <input className="dishStepsDeleteButton" type="button" value="X" />
                </div>
                </>
              )
            })
          }
        </div>
      </form>
    </main>
  )
}




export default RecipeCreationPage