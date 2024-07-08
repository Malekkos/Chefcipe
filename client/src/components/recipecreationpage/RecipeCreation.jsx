
import React, { useState } from "react"

import "../../styles/Recipe.scss"


const RecipeCreationPage = () => {

  const [recipe, setRecipe] = useState()
  const [ingredients, setIngredients] = useState([
    { name: "", desc: "", quant: "", quantNum: "" }
  ])
  const [steps, setSteps] = useState()

  return (
    <main id="recipeCreationMainWrapper">
      <h1>Create your recipe!</h1>
      <form id="recipeCreationForm">
        <div id="dishNameWrapper">
          <input type="text" value="" placeholder="Dish name..." />
          <input type="button" value="Clear" />
        </div>
        <div className="divider"></div>
        <div id="dishItemsWrapper">
          <div id="dishItemsSubWrapper">
            <p>Give your dish items!</p>
            <input type="button" />
          </div>
          {
            ingredients.map((val, key) => {
              console.log("this is the value: ", val)
              console.log("this is the key: ", key)
              return (
                <div className="itemsWrapper">
                  <input type="text" value={val.name} placeholder="Item name..." />
                  <input type="text" value={val.desc} placeholder="Item desc...(optional)" />
                  <div className="itemQuantityWrapper">
                    <input type="text" value={val.quant} placeholder="Item quant..." />
                    <input type="number" value={val.quantNum} placeholder="Amount..." />
                  </div>
                </div>
              )
            })
          }
        </div>
      </form>
    </main>
  )
}




export default RecipeCreationPage