import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Tabl() {

  const [employeedata,setemployeedata] = useState([])
  const deletedata = async(id)=>
  {
    const cnfrm = window.confirm("are you sure you to delete")
    if(!cnfrm)
    {
      return;
    }
    try {
      console.log("hit")
      console.log(id)
      const result = await axios.delete(`http://localhost:5000/employee/deletedata/${id}`)
      console.log(result)
      fetchdata()
      alert("item deleted successfully")
    } catch (error) {
      
    }
  }
  const fetchdata = async()=> {

    try {
      const result = await axios.get("http://localhost:5000/employee/getdetails")
      console.log(result)
      setemployeedata(result.data.employeedata)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchdata()
  
  },[])
  console.log(employeedata)
  return (
    <div >
         <Table striped bordered hover className='tbl'>   
      <thead>
        <tr>
          <th>SL.NO</th>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          employeedata.map((emp,index)=>(
          <tr key={emp._id} >
            <td>{index+1}</td>
            <td>{emp.Name}</td>
            <td>{emp.Age}</td>
            <td>{emp.Designation}</td>
            <td>{emp.Salary}</td>
            <td>
              
            <Link to={`/Edt/${emp._id}`}>
            <Button variant='primary' className="me-4" >Edit</Button>
            </Link>
            <Button variant='primary' onClick={()=>deletedata(emp._id)}>Delete</Button>
              
            </td>
          </tr>))
        }
      

      </tbody>
    </Table>
    </div>
  )
}

export default Tabl