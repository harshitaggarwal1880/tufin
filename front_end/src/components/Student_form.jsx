import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Student_form({Studentdata,setStudentData,getStudentSubmit,iseditform}) {
  const navigate=useNavigate();
// const[name,setName]=useSate("");
  return (
    <form onSubmit={(e) => (e.preventDefault())} className="form-user">
          <h3>Student Register</h3>
          <div className="mb-3">
            <label>Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={Studentdata.name}
              onChange={e => (setStudentData(prev => ({ ...prev, name: e.target.value })))}
            // onchange={e => (change(e, "loginemail"))}
            // onChange={(e)=>(setStudentData(prev=>({...prev,loginemail:e.target.value})))}
            />
          </div>
    
          <div className="mb-3">
            <label>Enter Email*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              value={Studentdata.email}
              onChange={e => (setStudentData(prev => ({ ...prev, email: e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Enter Phone*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone Number"
              value={Studentdata.phone}
              onChange={e => (setStudentData(prev => ({ ...prev, phone: e.target.value })))}
            />
          </div>

          <div className="mb-3">
            <label>Enter Subject*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Subject"
              value={Studentdata.subjects}
              onChange={e => (setStudentData(prev => ({ ...prev, subjects: e.target.value })))}
            />
          </div>
          { !iseditform&&<div className="mb-3">
            <label>Enter Password*  </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={Studentdata.password}
              onChange={e => (setStudentData(prev => ({ ...prev, password: e.target.value })))}
            />
          </div>}
          {!iseditform&&<div className="mb-3">
            <label>Renter Password*  </label>
            <input
              type="password"
              className="form-control"
              placeholder="Renter password"
              value={Studentdata.confirmpassword}
              onChange={e => (setStudentData(prev => ({ ...prev, confirmpassword: e.target.value })))}
            />
          </div>}


          <div className="mb-3">
            <label>Enter City*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={Studentdata.city}
              onChange={e => (setStudentData(prev => ({ ...prev, city: e.target.value })))}
            />
          </div>
          {/* <div className="mb-3">
            <label>Enter City*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={Studentdata.address}
              onChange={e => (setStudentData(prev => ({ ...prev, address: e.target.value })))}
            />
          </div> */}
          <div className="mb-3">
            <label>Enter Pincode*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pincode"
              value={Studentdata.pincode}
              onChange={e => (setStudentData(prev => ({ ...prev, pincode: e.target.value })))}
            />
          </div>
          <div className="mb-3">
            <label>Enter class*  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter class"
              value={Studentdata.class}
              onChange={e => (setStudentData(prev => ({ ...prev, class: e.target.value })))}
            />
          </div>
          {/* <div className="mb-3">
            <label>DOB  </label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter DOB"
              value={Studentdata.dob}
              onChange={e => (setStudentData(prev => ({ ...prev, dob: e.target.value })))}
            />
          </div> */}


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
              {
                iseditform?"Update":"Register as student"
              }
            </button>
            {
              iseditform&&
              <button type="submit" className="btn btn-danger" onClick={()=>navigate(-1)}>
              back
            </button>
            }
          </div>
        </form>
  )
}

export default Student_form