import { Navbar } from "./components/Navbar"
import "./assets/custom.scss"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/Layout"
import Home from "./pages/Home"
import { lazy, Suspense } from "react"
import LoadingSpinner from "./components/Loading"
import Plants from "./pages/Plants"
import { PlantDetails } from "./components/PlantDetails"
import "./assets/general.css"
const About = lazy(() => import("./pages/About"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="plants" element={<Plants />}></Route>
        <Route path="plants/:id" element={<PlantDetails />}></Route>
        <Route
          path="about"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
