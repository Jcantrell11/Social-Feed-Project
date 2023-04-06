import React, { useState } from 'react';



const PostForm = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        console.log(newPost);
        props.postNewPost(newPost);
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group row'>
                <label for="inputName3" className="col-sm-2 col-form-label">Name</label>
                <div className='col-sm-10'>
                    <input type='text' className="form-control" id="inputName3" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
            </div>
            <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-2 col-form-label">Post</label>
                <div className='col-sm-10'>
                    <textarea type='text' rows="2" className="form-control" id="colFormLabel" value={post} onChange={(event) => setPost(event.target.value)} />
                </div>
            </div>
            <div className='col-auto'>
                <button type='submit' className="btn btn-primary mb-2" style={{'position': 'right'}} >Create</button>
            </div>
        </form>

     );
}
 
export default PostForm;