import React from  'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'
function PhotoWall(props) {
    return (
    <div>
        <Link className="addIcon" to="/AddPhoto"></Link> 
        <div className="photoGrid">
            {props.posts
            .sort(function(x,y) {
                return y.id - x.id
            }).map((post, i) => <Photo key={i} post={post} {...props} index={i}/>)}
        </div> 
    </div>)
}

export default PhotoWall