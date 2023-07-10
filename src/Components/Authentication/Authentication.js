import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import  toast  from 'react-hot-toast';



function Authentication({setLogin}){
    const [auth, setAuth] = useState({
        user:'',
        password:''
    })

    //checking right credentials
const check =()=>{
    if(auth.user==="krishna" && auth.password==="todos"){
        setLogin(true)
    }
    else{
        toast.error("Wrong Credentials")
    }
}

    return <>
    <div style={{height: "50%", width:'50%', margin: "26px auto"}}>
    <FloatingLabel
        controlId="floatingInput"
        label="User Name"
        className="mb-2"
      >
        <Form.Control className='mb-2' type="text" placeholder="User Name" onChange={((e)=>{
            setAuth({
                ...auth,
                user: e.target.value
            })
        })} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={((e)=>{
            setAuth({
                ...auth,
                password: e.target.value
            })
        })} />
        <Button className="mt-4" style={{margin:"auto"}} variant="secondary" onClick={check} >Login</Button>
      </FloatingLabel>
    </div>
    </>
}

export default Authentication;