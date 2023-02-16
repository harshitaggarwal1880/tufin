import axios from 'axios'
import React, { useState } from 'react'
import '../css/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Student_form from './Student_form';
import Tutor_form from './Tutor_form';
import { useNavigate } from 'react-router-dom';


function Signup() {
  
  const [toogle, settoogle] = useState(1)
  
  
  
  const navigate=useNavigate();
  const [Studentdata, setStudentData] = useState({
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
    dob:""
  })
  const [Tutordata, setTutorData] = useState({
    name: "",
    email: "",
    phone: "",
    subjects: "",
    password: "",
    confirmpassword: "",
    city: "",
    pincode: "",
    classname: "",
    address: "",
    isadmin: false,
    location: "",
    hourlyrate: "",
    isadmin:false

  })
  const difftoast = (err) => {                  //TOSTER FUNCTION 
    toast(err);
  }




  const getStudentSubmit = () => {
    
    axios.post('/Student/Singup', { ...Studentdata })
      .then(response => {
        difftoast(response.data.message);
        setStudentData({
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
          dob:""

        })
        navigate('/Login');
      }
      )
      .catch(err => difftoast(err.response.data.message));

  }
  const getTutorSubmit = () => {
    // const formData = new FormData();
    // formData.append("image", Tutordata.image);
    // console.log(Tutordata.image.file)
    // console.log(typeof (Tutordata.image))
    // console.log(formData.get("image"));
    // console.log(Tutordata);
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }







    axios.post('/Tutor/Singup',
      { ...Tutordata},
      {
        'Content-Type': 'multipart/form-data'
      }
    )
      .then(response => difftoast(response.data.message))
      .catch(err => difftoast(err.response.data.message));
    setTutorData({
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
      isadmin: false,
      location: "",
      hourlyrate: "",
      ischecked:false
    })
  }



  return (
    <div style={{width:"80%",margin:"auto"}}>

      <div className="tooglebox"> 
      <button className="toogle" onClick={()=>{ settoogle(null)}}> Teacher </button>
      <button className="toogle" onClick={()=>{ settoogle(1)}}> Student </button>
      </div>

      <div className="formbox">
      { toogle && <Student_form Studentdata={Studentdata} setStudentData={setStudentData} getStudentSubmit={getStudentSubmit} iseditform={false} /> }
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      { !toogle && <Tutor_form Tutordata={Tutordata} setTutorData={setTutorData} getTutorSubmit={getTutorSubmit} /> }
      </div>

    </div>

  )
}

export default Signup