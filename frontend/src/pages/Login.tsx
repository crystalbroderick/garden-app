import { useState, useContext } from "react"
import Form from "react-bootstrap/Form"
import { onLogin } from "../services/auth.service"
import { IUser } from "../types/user"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
function Login() {
  const [values, setValues] = useState<IUser>({
    username: "",
    password: "",
  })
  const [error, setError] = useState<string>()
  const userContext = useContext(UserContext)
  const navigate = useNavigate()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setError("")
    await onLogin(values)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token))
        }
        userContext.setUser({ username: values.username })
        navigate("/")
      })
      .catch((e) => {
        console.log("error", e.message)
        setError(e.response.data.errors[0].msg)
      })
  }

  return (
    <section className="vh-100 bg-teagreen">
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="/images/strawberry.jpg"
                    alt="strawberry in garden"
                    className="img-fluid"
                    style={{ borderRadius: " 1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Form onSubmit={handleSubmit}>
                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-2">Balcony Botany</span>
                      </div>

                      <h5
                        className="fw-normal "
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account {userContext.user?.username}
                      </h5>

                      <div className="form-outline mb-4">
                        <Form.Group controlId="loginUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            onChange={onChange}
                            value={values.username}
                            required
                          />
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4">
                        <Form.Group controlId="loginPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            onChange={onChange}
                            value={values.password}
                            required
                          />
                        </Form.Group>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
