
import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
function Subject() {
    return (
        <div className="subjects">
           <center> <h1>Find by subjects</h1></center>
            <ul className="links_btn">
                <a href="/TutorDisplay"><li><Button className='btn orange'>Science</Button></li></a>

                <a href="/TutorDisplay"><li><Button className='btn orange'>Arts</Button></li></a>

                <a href="/TutorDisplay"><li><Button className='btn orange'>Commerce</Button></li></a>

                <a href="/TutorDisplay"><li><Button className='btn orange'>Physics</Button></li></a>
                <a href="/TutorDisplay"><li><Button className='btn orange'>Music</Button></li></a>
                <a href="/TutorDisplay"><li><Button className='btn orange'>History</Button></li></a>
                <a href="/TutorDisplay"><li><Button className='btn orange'>Politics</Button></li></a>
                <a href="/TutorDisplay"><li><Button className='btn orange'>English</Button></li></a>
                <a href="/TutorDisplay"><li><Button className='btn orange'>French</Button></li></a>
                <li><Link to="/TutorDisplay"><Button className='btn orange'>Spanish</Button></Link></li>
            </ul>
        </div>
    )
}

export default Subject