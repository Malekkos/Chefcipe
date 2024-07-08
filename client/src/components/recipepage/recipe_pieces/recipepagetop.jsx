import React, { useState } from "react"




const RecipePageTop = () => {
  const initialSortButton = [
    { name: "recent", active: false},
    { name: "nationality", active: false},
    { name: "name", active: false},
  ]

  const [sortButtonActive, setSortButtonActive] = useState([
    { name: "recent", active: true},
    { name: "nationality", active: false},
    { name: "name", active: false},
  ])
  
  
  const changeActive = (event) => {
    
    if (event.target.className === "recipePageSorterButton active") {
      return
    } else {
      const changer = [...initialSortButton]
      changer[event.target.id].active = true
      setSortButtonActive(changer)
    }
  }

  return(
    <>
      <div id="recipePageTopWrapper">
        <div id="recipePageSorterWrapper">
          <p>Sort by:</p>
          { sortButtonActive.map((val, key) => {
            return (
              <>
                <input id={key} onClick={(event) => changeActive(event)} className={`recipePageSorterButton ${val.active ? "active": ""}`} type="button" value={`${val.name}`} />
              </>
            )
          })}
        </div>
        <input type="button" value="Create Recipe" />
      </div>
    </>
  )
}



export default RecipePageTop