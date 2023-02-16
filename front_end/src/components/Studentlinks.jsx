import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Studentlinks.css'
import { useNavigate } from 'react-router-dom';

function Studentlinks() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    let type;
    useEffect(() => {
        type = JSON.parse(localStorage.getItem('type'));
        if (type !== null) {
            setName(type)
            console.log(type)
        }


    }, [type])
    const tologin = () => {
        if (name === "") {
            navigate('/Login');
        }
    }
    return (
        <div className='student-div'>
            <div className="img_div">
                <img src={require('../image/team.png')} style={{ borderRadius: "50%" }} />
            </div>
            <center>
                <h3>
                    Search for Tutor or be a Tutor
                </h3>
            </center>
            <p>
                At tutorhub we undestand the problem faced by student and give suggestions of tutors according to that and also able to provide
                oppertunites to tutors for some exra bucks
            </p>
            <ul className="links_btn">
                <li>
                    {name === "" ? (<a href={`/Login`}>
                        <Button className='btn blue' >Find a tutor</Button>
                    </a>) :
                        (
                            <a >
                                <Button className='btn blue' >Find a tutor</Button>
                            </a>)
                    }
                </li>
                <li>
                    {name === "" ? (<a href={`/Login`}>
                        <Button className='btn green' >Become a tutor</Button>
                    </a>) :
                        (
                            <a >
                                <Button className='btn green' >Become a tutor</Button>
                            </a>)
                    }
                </li>
                <li><a href="/Learn_More"><Button className='btn orange'>Learn More</Button></a></li>
            </ul>
        </div>
    )
}

export default Studentlinks