import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Student_dashboard from './Student_dashboard'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';



function Admin_dashboard() {
    const [studentdata, setstudentdata] = React.useState([])
    const [tutordata, settutordata] = React.useState([])
    const [slotshistory, sethistory] = React.useState([])

    const difftoast = (err) => {                  //TOSTER FUNCTION 
        toast(err);
      }
    useEffect(() => {
        axios.get('/Student/display')
            .then(response => setstudentdata(response.data)).catch(err => console.log(err))
        axios.get('/Purchase/display')
            .then(response => sethistory(response.data)).catch(err => console.log(err))
        axios.get('/Tutor/display')
            .then(response => settutordata(response.data)).catch(err => console.log(err))


    }, [])
    const reload=()=>{
        setTimeout(()=>
        window.location.reload(),5000)
    }
    console.log(studentdata)
    console.log(tutordata)
    console.log(slotshistory)
    const removetutor=(ele)=>{
        axios.post('/Tutor/delete',{
            tutor_id:ele._id
        }).then(response=>{difftoast(response.data.message);reload()}).catch(err=>console.log(err))
}
    const removestudent=(ele)=>{
        axios.post('/Student/delete',{
            student_id:ele._id
        }).then(response=>{difftoast(response.data.message);reload()}).catch(err=>console.log(err))
}

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <ToastContainer/>
            <center>
                <h3>
                    Admin Dashboard
                </h3>
            </center>
            <div>
                <div>
                    <center><h5>All Tutors</h5></center>
                    <Table striped bordered hove variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Expertise in class</th>
                                <th>Expertise in Subject</th>
                                <th>Hourlybases charges</th>
                                <th>Delete User</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                tutordata.map((ele, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.class}</td>
                                        <td>{ele.subjects}</td>
                                        <td>{ele.hourlyrate}</td>
                                        <td><Button className='btn-danger' onClick={()=>removetutor(ele)}>Delete Tutor Account</Button></td>

                                        {/* <td>index+1</td> */}
                                    </tr>
                                ))
                            }
                        </tbody>



                    </Table>



                </div>
                <div>
                    <center><h5>All Students</h5></center>
                    <Table striped bordered hove variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Studying in class</th>
                                <th>Issue in Subject</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentdata.map((ele, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.class}</td>
                                        <td>{ele.subjects}</td>
                                        <td><Button className='btn-danger' onClick={()=>removestudent(ele)}>Delete Student Account</Button></td>
                                        {/* <td>index+1</td> */}
                                    </tr>
                                ))
                            }
                        </tbody>



                    </Table>
                </div>
                <div>
                    <center>All Slots Bookings</center>

                    <Table striped bordered hove variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Tutor Name</th>
                                <th>Subject</th>
                                {/* <th>Expertise in Subject</th>
                                <th>Hourlybases charges</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                slotshistory.map((ele, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{ele.s_name}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.subject}</td>

                                        {/* <td>index+1</td> */}
                                    </tr>
                                ))
                            }
                        </tbody>



                    </Table>
                </div>


            </div>


        </div>
    )
}

export default Admin_dashboard