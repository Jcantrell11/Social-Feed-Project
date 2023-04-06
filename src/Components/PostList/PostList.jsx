
const PostList = (props) => {
    return ( 
        <table className='table'>
            <thead>
                {/* <tr>
                    <th>Posts</th>
                </tr> */}
            </thead>
            <tbody>
                {props.pastPosts.map((post) => {
                    return (
                    <tr>
                            <th>{post.name}</th>
                            <td>{post.post}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;