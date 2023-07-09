import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';




function NavBar({login, setLogin}) {
    const [searchtodos, setSearch] = useState('')
    const [searchdata, setData] = useState({
        id: '',
        name: "",
        status: "todo"
    })

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("tasks"))
        if(data){
        setData(data)}
     },[])
     const filteredTasks = searchdata.filter((task) =>
     task.name.toLowerCase().includes(searchtodos.toLowerCase())
   );
   useEffect(()=>{setData(filteredTasks)},[])




  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">My Todo App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          {login ? <> <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          
        </Form>
          </> : ''}
          
          </Navbar.Text>
          
          <Navbar.Text>{login ? <Button variant="secondary" style={{marginLeft:"5px"}} onClick={(()=>setLogin(false))}>Log Out</Button> : ""}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;