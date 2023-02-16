import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../css/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './LoginProvider';





function Login() {
  const { isLoggedIn, login, Set_student, Set_tutor, type } = React.useContext(LoginContext)
  const navigate = useNavigate();
  const [Studentdata, setStudentData] = useState({
    loginemail: "",
    loginpassword: ""
  })
  const [Tutordata, setTutorData] = useState({
    loginemail: "",
    loginpassword: ""
  })
  const [iserror, setError] = useState("")
  const [successmssg, setSucess] = useState("")

  const [toogle, settoogle] = useState(1)


  const difftoast = (err) => 
  {
    toast(err);
  }
  const getStudentSubmit = () => {
    console.log(Studentdata);
    // console.log(e);
    axios.post("/Student/Login", {
      loginemail: Studentdata.loginemail.toLowerCase(),
      loginpassword: Studentdata.loginpassword
    }).then((response) => {
      // console.log(response.data);
      login()
      Set_tutor();
      console.log(isLoggedIn, type)
      setError("")
      setSucess(response.data.name + " " + response.data.message)
      difftoast(response.data.name + " " + response.data.message);
      localStorage.setItem("user_data", JSON.stringify(response.data.user_data));
      localStorage.setItem("type", JSON.stringify("student"));

      navigate(`/Student_dashboard/${response.data.name.replace(' ', '-')}`);
    }).catch(err => {
      // const errormessage = err.response.data.message
      // console.log(errormessage)
      setError("error")
      setSucess("");
      difftoast("err")
      // setlogin(false);

    });
    // difftoast(iserror===""?successmssg:iserror)

    setStudentData({
      loginemail: "",
      loginpassword: ""
    })
  }

  const getTutorSubmit = () => {
    // e.preventDefault();
    // console.log(e);
    axios.post("/Tutor/login", {
      loginemail: Tutordata.loginemail,
      loginpassword: Tutordata.loginpassword
    }).then((response) => {
      // console.log(response.data);
      setError("")
      setSucess(response.data.name + " " + response.data.message)
      difftoast(response.data.name + " " + response.data.message);
      login()
      Set_tutor()
      console.log(type)


      navigate(`/Tutor_dashboard/${response.data.name.replace(' ', '-')}`);
      localStorage.setItem("user_data", JSON.stringify(response.data.user_data));
      localStorage.setItem("type", JSON.stringify("tutor"));


    }).catch(err => {
      const errormessage = err.response.data.message
      // console.log(errormessage)
      setError(errormessage)
      setSucess("");
      difftoast(errormessage)

    });
    setTutorData({
      loginpassword: "",
      loginemail: ""
    })
  }


  return (
    <div className="form">
      <div className="tooglebox"> 
      <button className="toogle" onClick={()=>{ settoogle(null)}}> Teacher </button>
      <button className="toogle" onClick={()=>{ settoogle(1)}}> Student </button>
      </div>

      <div className="form-main">
        { toogle && <form onSubmit={(e) => (e.preventDefault())} className="form-user">
          <h3>Student Login</h3>
          <div className="mb-3">
            <label>Email address*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={Studentdata.loginemail}
              onChange={e => (setStudentData(prev => ({ ...prev, loginemail: e.target.value })))}
            // onchange={e => (change(e, "loginemail"))}
            // onChange={(e)=>(setStudentData(prev=>({...prev,loginemail:e.target.value})))}
            />
          </div>
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
          <div className="mb-3">
            <label>Password*  </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={Studentdata.loginpassword}
              onChange={e => (setStudentData(prev => ({ ...prev, loginpassword: e.target.value })))}
            />
          </div>


          {/* {
        successmssg!==""&&<div class="alert alert-success" role="alert">{successmssg}</div>
      } */}
          {/* <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div> */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={getStudentSubmit}>
              Login
            </button>
          </div>
          <a href="/Singup" style={{padding:"0px",margin:"0px",color:"#0d6efd"}}>
            <p className="">
              Register
            </p>
          </a>
        </form> }
        { !toogle && <form onSubmit={(e) => (e.preventDefault())} className="form-user blue">
          <h3>Admin/Tutor Login</h3>
          <div className="mb-3">
            <label>Email address*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={Tutordata.loginemail}
              onChange={e => (setTutorData(prev => ({ ...prev, loginemail: e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={Tutordata.loginpassword}
              onChange={e => (setTutorData(prev => ({ ...prev, loginpassword: e.target.value })))}

            />
          </div>
          {/* <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div> */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-bg" onClick={getTutorSubmit}>
              Login
            </button>
          </div>
          <a href="/Singup" style={{padding:"0px",margin:"0px",color:"white"}}>
            <p className="">
              Register
            </p>
          </a>

        </form> }

      </div>
    </div>
  )
}

export default Login