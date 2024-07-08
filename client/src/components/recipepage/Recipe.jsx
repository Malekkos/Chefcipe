import RecipePageTop from "./recipe_pieces/recipepagetop"
import RecipePageItems from "./recipe_pieces/recipepageitems"

import axios from "axios"

import "../../styles/Recipe.scss"

const RecipePage = () => {

  window.onload = () => {
    axios.get("http://127.0.0.1:8000/recipes/")
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return(
    <>
      <RecipePageTop />
      <RecipePageItems />
    </>
  )
}




export default RecipePage