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
    // console.log(event.target.id)
    if (event.target.className === "recipePageSorterButton active") {
      return
    } else {
      // console.log("this is the sortButtonActive: ", sortButtonActive, " this is the dummy one: ", initialSortButton)
      const changer = [...initialSortButton]
      changer[event.target.id].active = true
      // console.log(changer)
      // console.log("before", sortButtonActive)
      setSortButtonActive(changer)
      // console.log("during", sortButtonActive)
      // setSortButtonActive({
      //   ...sortButtonActive,
      //    [changer]: true
      //   })
      // console.log("after", sortButtonActive)
    }
    // console.log(targ)

  }
  console.log(sortButtonActive)
  return(
    <>
      <div id="recipePageTopWrapper">
        <div id="recipePageSorterWrapper">
          <p>Sort by:</p>
          { sortButtonActive.map((val, key) => {
            // console.log("this is the val: ", val)
            // console.log(val.active)
            // console.log("this is the key:", key)
            return (
              <>
                <input id={key} onClick={(event) => changeActive(event)} className={`recipePageSorterButton ${val.active ? "active": ""}`} type="button" value={`${val.name}`} />
              </>
            )
          })}
          {/* <input onClick={(event) => changeActive(event)} className="recipePageSorterButton active" type="button" value="recent"/>
          <input onClick={(event) => changeActive(event)} className="recipePageSorterButton" type="button" value="nationality" />
          <input onClick={(event) => changeActive(event)} className="recipePageSorterButton" type="button" value="release" /> */}
        </div>
        <input type="button" value="Create Recipe" />
      </div>
    </>
  )
}



export default RecipePageTop