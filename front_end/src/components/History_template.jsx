import React from 'react'
import '../css/History_template.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import styled from "styled-components";

function History_template({name,subject,_id,istutor,s_name,isaccepted}) {
  const reload=()=>
  {
    setTimeout(()=>{
    window.location.reload(true)},5000)
  }

  const difftoast = (err) => {                  //TOSTER FUNCTION 
    toast(err);
  }
  const removeReq=()=>{
    // console.log(_id)
    axios.post('/Purchase/remove',{
      'remove_id':_id   
    }).then(response=>{difftoast(response.data.message)
    }).catch(err=>console.log(err))
    reload();
  }
  const setAccept=()=>{

    axios.put('/Purchase/Accept',{
      tutor_id:_id
    }).then(response=>{difftoast(response.data.message)}).catch(err=>console.log(err))
    reload();

  }
  // console.log(s_name)
  return (
    <Card>
    <li class="card">
    <div>
      {/* <img class="round" src="https://randomuser.me/api/portraits/women/8.jpg" alt="user" /> */}
      <h3 class="card-title">{istutor?s_name:name}</h3>
      <div class="card-content">
        <p>{subject}</p>          
      </div>
    </div>
    <div class="buttons">
      {
                !istutor?(<Button className='btn-danger' onClick={removeReq}>cancel</Button>):
                (<>

                {!isaccepted&&<Button className='btn-success' onClick={setAccept}>Accept</Button>}

                <Button className='btn-danger' onClick={removeReq}>cancel</Button>                
                </>)}

</div>
  </li>

    <ToastContainer/>
  </Card>
    
        

  )
}


const Card = styled.div`




h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cards {
  display: flex;
  padding: 25px 0;
  list-style: none;
  text-align: center;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
  flex: 0 0 100%;
  padding: 20px;
  background: var(--bg-color);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.2),
    -6px -6px 12px 0 rgba(255, 255, 255, 0.5);
  scroll-snap-align: start;
  transition: all 0.2s;
}

.card:not(last-child) {
  margin-right: 10px;
}

.card:hover {
  scale: 1.05;
}
.card .card-title {
  font-size: 1.5rem;
}

.card .round {
  border: 2px solid var(--persian-orange);
  border-radius: 50%;
  padding: .35rem;
}
.card .card-content {
  margin: 20px 0;
  max-width: 85%;
}
.card-content p {
  font-size: 0.88rem
}
button.primary {
	background-color: var(--color3);
	border: 1px solid var(--color3);
	border-radius: 3px;
	color: var(--white);
  font-family: inherit;
	font-weight: 500;
	padding: 10px 25px;
  margin-top: 1rem;
}

button.primary:hover {
  background: var(--color2);
}

button.primary.ghost {
	background-color: transparent;
	color: var(--color3);
}

button.ghost:hover {
  background: var(--color2);
  color: var(--white);
}
/* Media Query */

@media (min-width: 500px) {
  .card {
    flex-basis: calc(50% - 10px);
  }

  .card:not(:last-child) {
    margin-right: 20px;
  }
}

@media (min-width: 700px) {
  .card {
    flex-basis: calc(calc(100% / 3) - 20px);
  }

  .card:not(:last-child) {
    margin-right: 30px;
  }
}
@media (min-width: 1100px) {
  .card {
    flex-basis: calc(25% - 30px);
  }

  .card:not(:last-child) {
    margin-right: 40px;
  }
}


`;

export default History_template