import './index.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg="dark" variant = 'dark' expand = "lg">
          <Container>
            <Navbar.Brand>Amazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href = "/cart" className = "nav-link" >Cart</a>
            <a href = "/signin" className = "nav-link" >Sign In</a>
          </Nav>
        </Navbar>
    
      </header>

      <main>
        <Container>
          <Outlet ></Outlet>
        </Container>
      </main>
    </div>
  )
}

export default App
