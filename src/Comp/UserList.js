import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinners from './Spinners'
const UserList = () => {
    const [data,setData] = useState([])
    const [load,setLoad]=useState(true)
    const getUserData = () =>{
        axios.get('https://6517ed48582f58d62d353c39.mockapi.io/users')
        .then((res)=>{
            setData(res.data)
            setLoad(false)
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getUserData()
    },[])
    console.log(data)
  return (
    

            <div className='p-5'>
                <h1>User List</h1>
                {load ?(
                    <h1>

                    <Spinners className="m-5"/>
                    </h1>
                ):
                (

                    
                    <Table border={3}>
            <thead>
            <tr >
                <th>Sr.No</th>
                <th>Name</th>
                <th>D.0.B</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Hobbies</th>
                <th>State</th>
                <th>Resume</th>

            </tr>
            </thead>
            <tbody>

            {
                data.map((user,ind)=>{
                    return(
                        <tr>
                        <td>{ind+1}</td>
                        <td>{user.name}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <td>{user.address}</td>
                        <td>{user.hobbies.map((ele,ind)=>{
                            return(
                                <a>{ele},</a>
                                )
                            })}</td>
                        <td>{user.state}</td>
                        <td>{user.resume}</td>

                    </tr>
                )
            })
        }
        </tbody>
        </Table>
         
         )}
        
        </div>
 
    
    )
}

export default UserList