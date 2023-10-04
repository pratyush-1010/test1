import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AddUser = () => {
  const [name,setName]=useState("")
  const[dob,setDob]=useState("")
  const[gender,setGen]=useState('')
  const[address,setAdd]=useState("")
  const[state,setState]=useState('')
  const[resume,setRes]=useState("")
  const gen1="Male"
  const gen2="Female"
  const [hobbies, sethobbies] = useState([]);
  const activities = ['Coding', 'Sports', 'Cycling'];
  const [able,setAble]=useState(true)

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    
    if (checked) {
      sethobbies([...hobbies, name]);
    } else {
      sethobbies(hobbies.filter((activity) => activity !== name));
    }
  };


  


  const handleSubmit= async (e)=>{
    
    if(resume.endsWith(".docx") && hobbies.length >= 2 ) {

      try{
        const newuser={
        name,
        dob,
        hobbies,
        address,
        gender,
        state,
        resume
      }
      const response = await axios.post("https://6517ed48582f58d62d353c39.mockapi.io/users", newuser);
      
      console.log(response.data);
    }
    catch (error) {
      console.error(error);
    }
    
  }
  else if(hobbies.length < 2){
    alert("Select atleast 2 hobbies")
  }
  else{
    alert("Please upload .docx file")
  }
    
    

   
  }
  

  const can=()=>{
    setName("")
    setDob("")
    setAdd("")
    setRes("")
    sethobbies([])
    setState("--Select--")
  }
  

  
  return (
    <div className='p-5 outdiv'>
      <h1>Registration</h1>
     
          <div className='text-start  indiv w-25'>

      <label>Name: </label>
       <input type='text'
       value={name}
       onChange={(e)=> setName(e.target.value)}
       placeholder='Enter Name'
       className='inps'/>
       <br></br>
       
      <label>D.O.B: </label>

       <input type="date"
       value={dob}
       onChange={(e)=> setDob(e.target.value)}
       className='inps'
       ></input>
       <br>
       </br>
       <label>Hobbies : </label><br></br>
       {activities.map((activity) => (
        <>
        <label key={activity} className='check'>
          <input
            type="checkbox"
            name={activity}
            checked={hobbies.includes(activity)}
            onChange={handleCheckboxChange}
            />
          {activity.charAt(0).toUpperCase() + activity.slice(1)}
        </label>
        
            </>
      ))}
       <br></br>
       <label>Address: </label><br></br>
       <textarea value={address} onChange={(e)=>setAdd(e.target.value)} className='inps'>

       </textarea>
       <br></br>
       <label>Gender :</label>
       <br></br>
       Male
       <input type='radio'
       value={gen1}
       onChange={(e)=>setGen(e.target.value)}
       name='gen'
       className='check'></input>
       
       Female
       <input type='radio'
       value={gen2}
       onChange={(e)=>setGen(e.target.value)}
       name='gen'
       className='check'></input>
       <br></br>
       
       <label>State :</label>
       <select value={state}
       onChange={(e)=>setState(e.target.value)}
       className='inps text-center'
       >
        <option value={'sel'}>--Select--</option>
        <option value={'Maharashtra'}>Maharashtra</option>
        <option value={'Gujrat'}>Gujrat</option>
        <option value={'Tamil Nadu'}>Tamil Nadu</option>
        <option value={'Delhi'}>Delhi</option>

       </select>
       <br></br>
       <label>Upload Resume (only .docx files supported) :</label><br></br>
       <input type='file'
       value={resume}
       onChange={(e)=>setRes(e.target.value)}
      
       ></input>
       </div>
       <Link to={`/`}>
      <button onClick={handleSubmit} className='but'>Add</button>
       </Link>
      <button onClick={can} className='but'>Cancel</button>
      

    </div>
  )
}

export default AddUser



