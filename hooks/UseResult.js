import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [results, setResults] = useState([]);




const searchApi= async(searchTerm)=>{

    try {const response=await yelp.get('/search',{
        params: {
            term: searchTerm,
            location:'istanbul',
            limit:50
            
        }
    })
    setResults(response.data.businesses)
    } catch (error) {
        console.log("Bağlantı hatası")
    }



}

    useEffect(()=>{
        searchApi('toast')
    },[])

    return[searchApi,results];
}