import React, { useEffect, useState } from 'react'
import Aside from './Aside.jsx'
import axios from 'axios'
// import Card from 'react-bootstrap/Card';
import '../css/Student_dashboard.css'
import StudentTemplate from './StudentTemplate.jsx';
import History_template from './History_template.jsx';

function Tutor_dashboard() {
    const [data, setdata] = useState({})
    const [history, sethistory] = useState([])
    useEffect(() => {
        const tempdata = JSON.parse(localStorage.getItem('user_data'))
        setdata({ ...tempdata });
        // console.log(tempdata);  
        console.log((data._id));
        axios.post("/Purchase/Tutor",
            {
                tutor_id: tempdata._id
            }).then(response => {console.log(response.data);sethistory(response.data)})
            .catch(err => console.log(err))


            console.log(history);
    }, []);
    return (
        <div className="student-main">
            <Aside />
            <div className="dashboard-outer">
                <StudentTemplate ele={data} />
                {/* <table className="table-main">
                    <tr>
                        <th>Student Name</th>
                        <th>Subject</th>
                        <th>Aceept/Deny</th>
                    </tr> */}
                    <ul className="cards">
                    {history.map((ele, index) => (
                        <History_template {...ele} key={index} istutor={true} />
                    ))}
                    </ul>
                {/* </table> */}
            </div>
        </div>
    )
}

export default Tutor_dashboard