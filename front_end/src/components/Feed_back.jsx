import React from 'react'
import '../css/Feed_back.css'
function Feed_back({review,source,subject}) {
  // console.log(review,subject,source)
  return (
    <div className="feed-back">
      {/* <h1>hsjdhfh</h1> */}
      <p className="review">{review}</p>
      <ul className='list-main'>
        <li className='li'><h6>Subject:</h6><p>{subject}</p></li>
        <li className='li'><h6>Source:</h6><p>{source}</p></li>
      </ul>
    </div>
  )
}

export default Feed_back