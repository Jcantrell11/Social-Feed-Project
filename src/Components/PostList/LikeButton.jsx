import React, { useState } from 'react';


const CustomButton = (props) => {
    
    const[likeButton, setLikeButton] = useState('inactive')
    const[dislikeButton, setDislikeButton] = useState('inactive')

    function handleClickLike(){
        if(likeButton === "inactive"){
            setLikeButton('active');
        } else {
            setLikeButton('inactive');
        }
    } 

    function handleClickDislike(){
        if(dislikeButton === "inactive"){
            setDislikeButton('active');
        } else {
            setDislikeButton('inactive');
        }
    }

    return ( 
        <div>
            <button className={likeButton} onClick={handleClickLike}>Like</button>
        </div>

     );
}
 
export default CustomButton;