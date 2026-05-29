import Header from "./HomepageComp/Header/Header.jsx"
import NavBar from "./HomepageComp/NavBar/NavBar.jsx"
import Features from "./HomepageComp/Features/Features.jsx"

// Single reusable carousal list
import CarousalList from "./HomepageComp/CarousalList/CarousalList.jsx"

// Data sources
import services from "./HomepageComp/CarousalList/Service.js"
import spotlight from "./HomepageComp/CarousalList/Spotlight.js"

export default function Tutorial() {
  return (
    <>
      <Header />
      <NavBar />
      <Features />
      <CarousalList data={services} MainTitle="Featured Services" />
      <CarousalList data={spotlight} MainTitle="Merchant Spotlight" />
    </>
  )
}
