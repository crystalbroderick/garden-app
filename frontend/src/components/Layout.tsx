import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
const AppLayout = () => (
  <div className="App">
    <Navbar />
    {/* nested routes rendered here */}
    <Container className="border-bottom border-top p-2 w-75">
      <Outlet />
    </Container>
  </div>
)
export default AppLayout
