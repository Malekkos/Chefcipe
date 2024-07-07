





const BodySectionThree = () => {

  const img = require("../../../media/chefSectionThree.jpg")

  return (
    <>
      <section id="sectionThree">
        <div id="sectionThreeWrapper">
          <p className="sectionContent">
            Can't find what you need? Want an <em className="sectionThreeTextChange">Expert</em> to draft up a dish to your liking?
          </p>
          <p className="sectionContent">
            We have implemented a <em className="sectionThreeTextChange">one of a kind</em> bounty system for chefs! Detail your bounty with types of food, restrictions, style, anything you'd like!
          </p>
          <p className="sectionContent">
            Click the link below to <em className="sectionThreeTextChange">draft up a request</em> or attempt to <em className="sectionThreeTextChange">take on your own</em>!
          </p>
          <input type="button" value="Click me!" />
        </div>
        <img className="homeImage" src={img} alt="" />
      </section>
    </>
  )
}



export default BodySectionThree