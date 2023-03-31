import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
const AppLayout = () => (
  <div className="App">
    <Navbar />
    {/* nested routes rendered here */}
    <Container className=" border-top p-2 w-75">
      <Outlet />
    </Container>
    <div className="fixed-bottom">
      <Footer />
    </div>
  </div>
)
export default AppLayout
