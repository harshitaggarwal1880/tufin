import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modals(props){
  // console.log(props.name)
  const difftoast = (err) => {
    toast(err);

  }


  const get_submit=()=>{
    axios.post('/Purchase/AddtoDB',
    {
      s_id:JSON.parse(localStorage.getItem('user_data'))._id
      ,t_id:props._id,
      name:props.name,
      subject:props.subjects,
      s_name:JSON.parse(localStorage.getItem('user_data')).name
    })
    .then(data=>difftoast(data.data.message))
    .catch(err=>console.log(err))


  }
  
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display:"flex" ,textAlign:"center"}}>
          <span>
            Name:
          </span>
          <h6 style={{ display:"flex",alignItems:"center",margin:"0px",textTransform:"capitalize"}}>{props.name}</h6> 
          </div>
          <div style={{display:"flex" ,textAlign:"center"}}>
          <span>
            Hourly-charges:
          </span>
          <h6 style={{display:"flex",alignItems:"center",margin:"0px"}}>{props.hourlyrate}</h6> 
          </div>




        </Modal.Body>
        <Modal.Footer>
          <Button onClick={get_submit}>Book a class</Button>
        </Modal.Footer>
      </Modal>
  )
}
  

export default Modals