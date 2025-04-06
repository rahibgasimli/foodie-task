import BestSeller from "../components/Home/BestSeller"
import HomeSlider from "../components/Home/HomeSlider"


function Home() {
  return (
    <section className="home-section">
      <HomeSlider/>
      <BestSeller/>
    </section>
  )
}

export default Home