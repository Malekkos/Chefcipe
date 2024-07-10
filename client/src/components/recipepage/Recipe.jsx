import RecipePageTop from "./recipe_pieces/recipepagetop"
import RecipePageItems from "./recipe_pieces/recipepageitems"

import React, { useState } from "react"

import axios from "axios"

import "../../styles/Recipe.scss"

const RecipePage = () => {

  const [recipeItems, setRecipeItems] = useState("")

  // window.onload = () => {
  //   axios.get("http://127.0.0.1:8000/recipes/")
  //   .then(res => {
  //     setRecipeItems(res.data)
  //     console.log(res.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  return(
    <>
      <RecipePageTop />
      <RecipePageItems />
    </>
  )
}




export default RecipePage