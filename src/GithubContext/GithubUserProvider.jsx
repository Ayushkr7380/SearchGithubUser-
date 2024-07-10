import { useEffect, useMemo, useState } from "react";
import { CreateContext } from "./CreateContext";
import axios from "axios";
import useDebounce from '../utils/useDebounce'
export function GithubUserProvider(props){
    const [search , setSearch] = useState('')
    const [fetchedData , setFetchedData ] = useState([])
    const [status , setStatus] = useState(''); 
    const [ loading , setLoading] = useState(true);
    
    const FetchUser = async(username)=> {
        try {          
            let response = ''
            if(username !== ''){
                response = await axios.get(`https://api.github.com/users/${username}`)
                setFetchedData([response.data])
            }
            else{
                response = await axios.get(`https://api.github.com/users`)
                setFetchedData(response.data);
            }
            setLoading(false);
            setStatus('')
        } catch (error) {
            setLoading(false);
            setStatus('User Not Found!!Please Try Again Later')
        }
    }   

    const fetchDebounce = useMemo(() => useDebounce(FetchUser, 2000), []);
    
    useEffect(()=>{    
        fetchDebounce(search)
    },[search])

    useEffect(()=>{
        FetchUser('');
    },[])
    return (
        <>
            <CreateContext.Provider value={{ search , setSearch , fetchedData , status , loading}}>
                {props.children}
            </CreateContext.Provider>
        </>
    )
}