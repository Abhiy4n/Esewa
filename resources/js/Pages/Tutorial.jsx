import { Head } from '@inertiajs/react';
import Header from "../Components/HomepageComp/Header/Header.jsx"
import NavBar from "../Components/HomepageComp/NavBar/NavBar.jsx"
import Features from "../Components/HomepageComp/Features/Features.jsx"
import CarousalList from "../Components/HomepageComp/CarousalList/CarousalList.jsx"
import services from "../Components/HomepageComp/CarousalList/paymentMethod.js"

export default function Tutorial() {
  return (
    <>
      <Head title="Tutorial" />
      <Header />
      <NavBar />
      <Features />
      <CarousalList data={services} MainTitle="Payment Method" />
    </>
  )
}
