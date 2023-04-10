import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
const AppLayout = () => (
  <div id="page-container">
    <Navbar />
    {/* nested routes rendered here */}
    <Container id="content-wrap">
      <Outlet />
    </Container>
    <div id="footer">
      <Footer />
    </div>
  </div>
)
export default AppLayout
