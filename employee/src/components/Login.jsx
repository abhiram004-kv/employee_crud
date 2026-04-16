import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name,setname]=useState('')
  const [age,setage]=useState('')
  const [designation,setdesignation]=useState('')
  const [salary,setsalary]=useState('')
  const navigate = useNavigate('') 
  
  const addemployeee = async(event)=>{
    event.preventDefault()
    console.log(name,age,designation,salary)
    const body={name,age,designation,salary}
    try{
      const result=await axios.post("http://localhost:5000/employee/addemployee",body)//back end host id
      console.log(result)

      alert(result.data.message)
      navigate('/')

    }catch(e){
      console.log(e);
      
    }
  
  }
    
  return (
     <div className='Loginpage w-75 m-auto'>
      <h1 className='text-center' style={{color:'whitesmoke'}}>User Details</h1>
    <Form >
      <Form.Group className="Ln" controlId="Formname">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(event)=>setname(event.target.value)} />
      </Form.Group>
      <Form.Group className="Ln" controlId="FormAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" min={1} max={80} onChange={(event)=>setage(event.target.value)} />
      </Form.Group>
      <Form.Group className="Ln" controlId="FormDesign">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your designation" onChange={(event)=>setdesignation(event.target.value)} />
      </Form.Group>
      <Form.Group className="Ln" controlId="FormSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter your salary" onChange={(event)=>setsalary(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" className=' m-center mt-4' onClick={(event)=>{addemployeee(event)}} >
        Submit
      </Button>
    </Form>
    </div>
     
  )
}

export default Login