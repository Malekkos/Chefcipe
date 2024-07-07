

const BodySectionOne = () => {
  const image = require("../../../media/foodSpreadMainOne.jpg")

  return (
    <>
      <main id="mainOne">
        <div id="mainWrapper">
          <p className="mainContent">Ever feel like the cookbooks <em className="mainTextChange">aren't enough</em>? Has the line cook given you one too many dish ideas that <em className="mainTextChange">went up in flames</em>? Worry not!</p>
          <p className="mainContent" style={{fontFamily: "cursive"}}>chef<span className="mainTextChange">cipe</span> is a platform for chefs like yourself to connect and share recipes! Our strong community <em className="mainTextChange">cooks their hearts out</em> to share their ideas & recipes with people like yourselves</p>
        </div>
        <img className="homeImage" src={image} alt="A spread of food of various types"/>
      </main>
    </>
  )
}



export default BodySectionOne