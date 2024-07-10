import './User.css'
function User({image,username}){
    return (
        <>
            <div id="userBox">
                <img src={image} alt={username} />
                <p>{username}</p>
            </div>
        </>
    )
}
export default User;