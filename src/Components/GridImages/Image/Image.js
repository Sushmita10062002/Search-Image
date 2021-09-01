import React from 'react'
import "./Image.css"
const Image =(props)=>{
   return(
      <div className="card">
        <img src={props.image.webformatURL} alt=""/>
        <div className="card-body">
           <div className="card-title">Photo by {props.image.user}</div>
           <ul className="card-text">
              <li>
                 <strong>
                    Views:
                 </strong>
                 {props.image.views}
              </li>
              <li>
                 <strong>
                    Downloads:
                 </strong>
                 {props.image.downloads}
              </li>
              <li>
                 <strong>
                    Likes:
                 </strong>
                {props.image.likes}
              </li>
           </ul>
        </div>
      </div>
   )
}
export default Image;