import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Student_form from './Student_form';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'bootstrap';


function Edit_student() {
  const [data, setdata] = React.useState({})
  useEffect(() => {
    const tempdata = JSON.parse(localStorage.getItem('user_data'))
    setdata({ ...tempdata });
    //    console.log(data,"dashboard wala");
  }, [])
  const getUpdate = () => {
    // console.log("called");
    axios.put('/Student/EditStudent', { ...data })
      .then(response => {
        console.log(response.data)

        setdata({ ...response.data.data })
        localStorage.removeItem('user_data');
        localStorage.setItem('user_data', JSON.stringify(response.data.data));
        setdata({
          name: "",
          email: "",
          phone: "",
          subjects: "",
          password: "",
          confirmpassword: "",
          city: "",
          pincode: "",
          class: "",
          address: "",
        })
        difftoast(response.data.message);

      })
      .catch(err => {

        difftoast("Server error is their")
      })
  }
  // console.log(data);

  const difftoast = (err) => {                  //TOSTER FUNCTION 
    toast(err);
  }
  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Student_form Studentdata={data} setStudentData={setdata} getStudentSubmit={getUpdate} iseditform={true} />
      <ToastContainer />
    </div>
  )
}

export default Edit_student