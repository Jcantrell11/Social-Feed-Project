
const PostList = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody>
                {props.pastPosts.map((post) => {
                    return (
                    <tr>
                        <td>{post.name}</td>
                        <td>{post.post}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;