
import React, { useState } from "react"

import "../../styles/Recipe.scss"


const RecipeCreationPage = () => {

  const [recipe, setRecipe] = useState()
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([
    { name: "", desc: "", type: "", typeNum: "" },
    { name: "", desc: "", type: "", typeNum: "" },
    { name: "", desc: "", type: "", typeNum: "" },
  ])
  const [steps, setSteps] = useState([
    { name: "", desc: "", },
    { name: "", desc: "", },
  ])

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "items":
        const containerItems = [...ingredients]
        const targetItems = event.target.parentElement
        containerItems[targetItems.attributes[0].nodeValue][event.target.placeholder] = event.target.value
        setIngredients(containerItems)
        break;
      case "steps":
        const containerSteps = [...steps]
        const targetSteps = event.target.parentElement
        containerSteps[targetSteps.attributes[0].nodeValue][event.target.placeholder] = event.target.value
        setSteps(containerSteps)
        break
      default:
        console.log("how did this happen?")
        return
    }

  }
    const handleDelete = (event) => {
      switch(event.target.name) {
        case"items":
        const containerDeleteIngredients = [...ingredients]
        const parentElementIngredients = event.target.parentElement.attributes[0].nodeValue
        containerDeleteIngredients.splice(parentElementIngredients, 1)
        setIngredients(containerDeleteIngredients)
        break;
        case "steps":
          const containerDeleteSteps = [...steps]
          const parentElementSteps = event.target.parentElement.attributes[0].nodeValue
          containerDeleteSteps.splice(parentElementSteps, 1)
          setSteps(containerDeleteSteps)
          break;
      default:
        console.log("how did this happen?")
        return
      }
    }

    const clearName = () => {
      setName("")
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
          <input id="dishNameButton" onClick={() => clearName()}type="button" value="Clear" />
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
                  <input className="itemGeneral" name="items" type="text" value={val.desc} onChange={(event) => handleChange(event)} placeholder="desc" />
                  <input className="itemGeneral" name="items" type="text" value={val.type} onChange={(event) => handleChange(event)} placeholder="type" />
                  <input className="right itemGeneral" name="items" type="number" value={val.typeNum} onChange={(event) => handleChange(event)} placeholder="typeNum" />
                  {key + 1 === 1 ? "" : <input name="items" onClick={(event) => handleDelete(event)} className="dishItemDeleteButton" type="button" value="X" />}
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
                  <div name={key} className="stepsWrapper">
                    <p className="stepsNum">{key + 1}</p>
                    <input name="steps" onChange={(event) => handleChange(event)} className="stepName left" type="text" value={val.name} placeholder="name" />
                    <textarea name="steps" onChange={(event) => handleChange(event)} className="stepDesc right" type="tex" value={val.desc} placeholder="desc" />
                    {key + 1 === 1 ? "" : <input name="steps" onClick={(event) => handleDelete(event)} className="dishStepsDeleteButton" type="button" value="X" />}
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