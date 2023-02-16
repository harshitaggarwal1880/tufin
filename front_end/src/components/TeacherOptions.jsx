import React from 'react';
import "../css/TeacherOptions.css"



function TeacherOptions(){
    return(
        <>
        <div className="main">
            <center>
                <h2>
                    Why We Best 
                </h2>
            </center>
            <ul className="list-group">
                <li className="li-main">
                    <div className='li-inner'>
                        <div className="img-divs">
                            <img src={require('../image/screen.png')} style={{borderRadius:"50%"}}/>
                        </div>
                        <p>Online Lessons</p>
                        <p>Use our whiteboard to experience live interactive tuition lessons from your home.</p>
                    </div>
                </li>
                <li className="li-main">
                    <div className='li-inner'>
                        <div className="img-divs">
                            <img src={require('../image/global.png')} style={{borderRadius:"50%"}}/>
                        </div>
                        <p>DBS Checked Tutors</p>
                        <p>all our Tutor passed through certain checked to be qualified for this field</p>
                    </div>
                </li>
                <li className="li-main">
                    <div className='li-inner'>
                        <div className="img-divs">
                            <img src={require('../image/calender.png')} style={{borderRadius:"50%"}}/>
                        </div>
                        <p>Manage your classes</p>
                        <p>You can even have Acess to recordings</p>
                    </div>
                </li>
            </ul>



        </div>
        </>
        


    )
}

export default TeacherOptions