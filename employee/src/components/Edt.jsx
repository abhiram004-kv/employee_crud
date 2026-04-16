import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Edt() {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('')
  const navigate=useNavigate()
  const params = useParams()
  const id = params.id
  console.log(id)

  const fetchdata = async() =>{
    const response = await axios.get(`http://localhost:5000/employee/getemployee/${id}`)

   console.log(response);
   const data = response.data.employeedata
   setName(data.Name||'')
   setAge(data.Age||'')
   setDesignation(data.Designation||'')
   setSalary(data.Salary||'')
   
}

 useEffect(()=>{
    fetchdata()
  
  },[])
  
  const editdata = async(e)=>{
    console.log('');
    
    e.preventDefault()
    const body = {name,age,designation,salary}
    const response = await axios.put(`http://localhost:5000/employee/editemployee/${id}`,body)
    console.log(response);
    navigate('/')
  }

  return (
    
     <div className='Loginpage w-75 m-auto'>
    
      <h1 className='text-center'  style={{color:'whitesmoke'}}>Employee Details</h1>
    <Form>
      <Form.Group className="Ln" controlId="Formname">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} />  
      </Form.Group>
      <Form.Group className="Ln" controlId="FormAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" min={1} max={80}  value={age} onChange={(event) => setAge(event.target.value)}/>
      </Form.Group>
      <Form.Group className="Ln" controlId="FormDesign">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your designation" value={designation} onChange={(event) => setDesignation(event.target.value)} />
      </Form.Group>
      <Form.Group className="Ln" controlId="FormSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter your salary" value={salary} onChange={(event) => setSalary(event.target.value)}/>
      </Form.Group>
     
      
      <Button variant="primary" type="submit" className='mt-4 ms-7 m-6 ' onClick={(event)=>editdata(event)}>
        Confirm edit
      </Button>
       
    </Form>
    </div>
    
  )
}

export default Edt