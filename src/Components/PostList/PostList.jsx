import React, { useState } from 'react';
import './LikeButton.jsx'


const PostList = (props) => {
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
        <table className='table'>
            <thead>
              
            </thead>
            <tbody>
                {props.pastPosts.map((post) => {
                    return (
                    <tr>
                        <th>{post.name}</th>
                        <td>{post.post}</td>
                        <button className={likeButton} onClick={handleClickLike}>Like</button>
                        <button className={dislikeButton} onClick={handleClickDislike}>Dislike</button>
                    </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;