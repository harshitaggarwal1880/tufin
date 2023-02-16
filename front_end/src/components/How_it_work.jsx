import React from 'react'
import '../css/How_it_work.css'
function How_it_work() {
  return (
    <section class="how section">
    <div class="container">
      <div class="sectionheader">
        <center>
        <h2>HOW IT WORKS</h2>
        </center>
      </div>
      <div class="howitems">
        <div class="howitem">
            {/* <div> */}
            <img src={require('../image/online_tutor.png')}/>
{/*  */}
            {/* </div> */}
          
          <h5>Search tutors online or in-person</h5>
          <p>Search and compare online &amp; local tutors by subject and level.</p>
        </div>
        <div class="howitem">
            <img src={require('../image/checklist.png')}/>
          
          <h5>View tutor's qualifications</h5>
          <p>View tutor's qualifications, feedback and experience</p>
        </div>
        <div class="howitem">
            <img src={require('../image/network.png')}/>
          
          <h5>Contact as many tutors as you like</h5>
          <p>Contact as many tutors as you would like through our messaging system</p>
        </div>
        <div class="howitem">
            <img src={require('../image/review.png')}/>
          <h5   >Select your perfect tutor</h5>
          <p>Select your perfect tutor and book your first lesson</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default How_it_work