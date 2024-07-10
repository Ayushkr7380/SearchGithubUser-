import { useContext } from "react"
import { CreateContext } from "../../GithubContext/CreateContext"
import './Search.css'
function Search(){
    const { search , setSearch } = useContext(CreateContext)
    return(
        <>
            <div id="search">
                <input
                 type="text"
                 placeholder="Enter UserName"
                 value={search}
                 onChange={(e)=>setSearch(e.target.value)}
                 />
            </div>
        </>
    )
}
export default Search