





const BodySectionTwo = () => {

  const img = require("../../../media/chefSectionTwo.jpg")

  return (
    <>
      <section id="sectionTwo">
        <div id="sectionTwoWrapper">
          <p className="sectionContent">
            One of our proudest implementations is a twitter like feed from <em className="sectionTwoTextChange">Real chefs</em> around the world!
          </p>
          <p className="sectionContent">
            Sort by food type, region, even specific chef to find what you desire. Click the link Below to get started on finding the recipe <em className="sectionTwoTextChange">just right for you</em>!
          </p>
          <input type="button" value="Click me!"/>
        </div>
        <img className="homeImage" src={img} alt="chef working in a kitchen" />
      </section>
    </>
  )
}



export default BodySectionTwo