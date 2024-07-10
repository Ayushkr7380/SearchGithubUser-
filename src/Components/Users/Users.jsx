import { useContext } from "react"
import { CreateContext } from "../../GithubContext/CreateContext"
import User from "../User/User"
import './Users.css'
function Users(){
    const { fetchedData , status ,loading} = useContext(CreateContext)
    return (
        <>  
            {loading ? <h1>Loading...</h1> :status ? <h1>{status}</h1> :
            <div id="usersbody">
                {fetchedData.map((ele , idx)=> <User  key={idx} image={ele.avatar_url} username={ele.login} /> )}
            </div>
            }
        </>
    )
}
export default Users