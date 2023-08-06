import { useEffect, useState } from "react"
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState()
    
    const apiUrl='  http://localhost:8000/blogs1'


    useEffect(()=>{
      setTimeout(()=>{
        fetch(apiUrl)
        .then(res=>{
          if(!res.ok){
            throw Error("couldn't fetch data from that resource")
          }
  
          return res.json()
        })
        .then(data=>{
          setBlogs(data)
          setIsLoading(false)
        })
        .catch(error=>{
          setError(error.message)
          setIsLoading(false)
        })
      },1000)
     
    })

 
  
   
     
    
    return ( 
        <div className="home">
          {isLoading&&<div>Loading...</div>}
          <p>{error}</p>
          {blogs&&<BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;
