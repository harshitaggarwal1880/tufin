import React,{useState,useEffect} from 'react'
import '../css/DisplayTemplate.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from './Modals';
import styled from "styled-components";



function DisplayTemplate({ele}) {
// console.log(ele);
const[showker,setshow]=useState(false);

  return (

    

    <Card>
    <div class="card">
  <img src={require("../image/user-log.png")} alt="John" />
  {/* <div className="img-div">
            <div>
                {(ele.name.charAt(0))}
            </div>

        </div> */}
  <h1>{ele.name}</h1>
  <p class="title">Class : { ele.class }</p>
  <p>Location: {ele.location}</p>
  <p>Charges: ${ele.hourlyrate }</p>
  <p><Button className='btn orange' onClick={()=>{
            setshow(true)
        }}>View Details</Button></p>
    </div>
    <Modals
        show={showker} onHide={() => setshow(false)} {...ele} />

    </Card>


    // <div className="Template-main">
    //     <div className="img-div">
    //         <div>
    //             {(ele.name.charAt(0))}
    //         </div>

    //     </div>
    //     <div className='details'>
    //         <div className="personal">
    //             <span className="heading">
    //                 Name:
    //             </span>
    //             <span className='values'>
    //                 {ele.name}
    //             </span>
    //         </div>
    //         <div className="personal">
    //             <span  className="heading">
    //                 Location
    //             </span>
    //             <span className='values'>
    //                 {   ele.location}
    //             </span>
    //         </div>
    //         <div>
    //             <span  className="heading">
    //                 Expertise in class
    //             </span>
    //             <span className='values'>
    //                 {
    //                     ele.class
    //                 }
    //             </span>
    //         </div>
    //         {/* <div>
    //             <span  className="heading">
    //                 Expertise in Subject
    //             </span>
    //             <span className='values'>
    //                 {
    //                     ele.subjects
    //                 }
    //             </span>
    //         </div> */}
    //         <div>
    //             <span  className="heading">
    //                 Hourly charges

    //             </span>
    //             <span className='values'>
    //                 {
    //                     ele.hourlyrate

    //                 }
    //             </span>
    //         </div>
           

    //     </div>
    //     <div className='Link-btn center'>
        // <Button className='btn orange' onClick={()=>{
        //     setshow(true)
        // }}>View Details</Button>
    //         </div>
        // <Modals
        // show={showker} onHide={() => setshow(false)} {...ele} />


    // </div>
  )
}


const Card = styled.div`


.card {
    width: 300px;
    height: 300px;
    display: flex;
    // padding: 5px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  // width: 300px;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

.img-div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

`;

export default DisplayTemplate