import React from 'react'
import { LoginContext } from './LoginProvider';

function StudentTemplate({ele}) {
    const d=ele.name;
    const {type}=React.useContext(LoginContext)
  return (
    <div className="Template-main">
        <div >
            <div>
                <img src={require('../image/user.png')}/>
                {/* {ele.name} */}
            </div>

        </div>
        <div className='details'>
            <div className="personal">
                <span className="heading">
                    Name:
                </span>
                <span className='values'>
                    {ele.name}
                </span>
            </div>
            <div className="personal">
                <span  className="heading">
                    City:
                </span>
                <span className='values'>
                    {   ele.city}
                </span>
            </div>
            {/* <div>
               {type=='student'? <span  className="heading">
                    Studying in class:
                </span>:<span>Tutor For Class:</span>
                }
                <span className='values'>
                    {
                        ele.class
                    }
                </span>
            </div> */}
            {/* <div>
            {type=='student'? <span  className="heading">
            Issue in Subject:
                </span >:<span className="heading">Expert in Subject:</span>
                }

                <span className='values'>
                    {
                        ele.subjects
                    }
                </span>
            </div> */}
            
        </div>
        {/* <a href="single_tutor" className="Link-btn  center"><Button className='btn orange'>View Details</Button></a> */}


    </div>
  )
}

export default StudentTemplate