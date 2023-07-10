import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useContext } from "react";
import myContextAPI from '../../ContextAPI/ContextAPI';




function NavBar({login, setLogin}) {
  const {tasks, setTasks} = useContext(myContextAPI)
    const [searchtodos, setSearch] = useState('')
    

    //fillter search 
     const filteredTasks = tasks.filter((task) =>
     task.name.toLowerCase().includes(searchtodos.toLowerCase()));
   
     //set search filltered data
     useEffect(()=>{
      setTasks(filteredTasks)
  
    },[searchtodos])




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
            onChange={((e)=>setSearch(e.target.value))}
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