import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Tutor_form from './Tutor_form';


function Edit_tutor() {
    const [data, setdata] = useState({})
    useEffect(() => {
        const tempdata = JSON.parse(localStorage.getItem('user_data'))
        setdata({ ...tempdata });
        //    console.log(data,"dashboard wala");
      }, [])
    const difftoast = (err) => {                  //TOSTER FUNCTION 
        toast(err);
      }

      const getUpdate=()=>{
        axios.put('/Tutor/EditTutor',{...data})
        .then(response=>{
            setdata({...response.data.data})
            localStorage.removeItem('user_data');
        localStorage.setItem('user_data', JSON.stringify(response.data.data));
        setdata({
            name: "",
            email: "",
            phone: "",
            subjects: "",
            city: "",
            pincode: "",
            classname: "",
            address: "",
            isadmin: false,
            location: "",
            hourlyrate: "",
        })
            difftoast(response.data.message); 
        })
        .catch(err=>{difftoast("Some error in updating try after some time");}
        )
      }


  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Tutor_form Tutordata={data} setTutorData={setdata} getTutorSubmit={getUpdate} iseditform={true} />
      <ToastContainer />
    </div>
  )
}

export default Edit_tutor