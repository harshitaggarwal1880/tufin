import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Admin() {
    const [Studentdata, setStudentData] = useState({
        loginemail: "",
        loginpassword: ""
      })
      const difftoast = (err) => {
        toast(err);
    

      }
      const navigate = useNavigate();

      const getStudentSubmit = () => {
        console.log(Studentdata);
        // console.log(e);
        axios.post("/Tutor/Admin", {
          loginemail: Studentdata.loginemail.toLowerCase(),
          loginpassword: Studentdata.loginpassword
        }).then((response) => {
          difftoast(response.data.name + " " + response.data.message);
          localStorage.setItem("user_data", JSON.stringify(response.data.user_data));
          localStorage.setItem("type", JSON.stringify("admin"));
    
          navigate(`/Admin_dashboard/${response.data.name.replace(' ', '-')}`);
        }).catch(err => {
            console.log(err)
          difftoast("err")
    
        });
        setStudentData({
          loginemail: "",
          loginpassword: ""
        })
      }
  return (
    <div className="form-main" style={{position:"absolute",top:"0",left:"0",right:"0",bottom:"04"}}>
        <form onSubmit={(e) => (e.preventDefault())} className="form-user">
          <h3>Admin Login</h3>
          <div className="mb-3">
            <label>Email address*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={Studentdata.loginemail}
              onChange={e => (setStudentData(prev => ({ ...prev, loginemail: e.target.value })))}
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
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={getStudentSubmit}>
              Login
            </button>
          </div>
          {/* <a href="/Singup" style={{padding:"0px",margin:"0px",color:"#0d6efd"}}>
            <p className="">
              Register
            </p>
          </a> */}
        </form>



    </div>
  )
}

export default Admin