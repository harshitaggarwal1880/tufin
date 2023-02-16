import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Aside from './Aside.jsx'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import '../css/Student_dashboard.css'
import StudentTemplate from './StudentTemplate.jsx';
import History_template from './History_template.jsx';
///////
// 1. profile
// 2. Previous classes 
// 3. Edit profile
// 4. logout Button

function Student_dashboard() {
    const [data, setdata] = React.useState({})
    const [history, sethistory] = React.useState([])
    useEffect(() => {
        const tempdata = JSON.parse(localStorage.getItem('user_data'))
        setdata({ ...tempdata });
        console.log(data.name)
           console.log((data._id));
        axios.post('/Purchase/user',
       {
            "s_id":tempdata._id
        }).then(response=>sethistory(response.data)).catch(err=>console.log(err))
}, [])


//  console.log(data,"outer wala");
return (


    <div className="student-main">
        <Aside />
        <div className="dashboard-outer">
            <StudentTemplate ele={data} />
            <center>
                <h4>History of Previous Slots</h4>
            </center>
            {/* <table className="table-main">
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th></th>
                </tr> */}
                <ul className="cards">
                {
                   
                    history.map((ele,index)=>(
                            <History_template {...ele} key={index}/>
                    ))
                }
            {/* </table> */}
                </ul>
        </div>
    </div>
)
}

export default Student_dashboard