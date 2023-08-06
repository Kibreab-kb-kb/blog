import { useEffect, useState } from "react"
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([])
    const [isLoading,setIsLoading]=useState(true)

    const apiUrl='  http://localhost:8000/blogs'
 
    
  useEffect(()=>{
    setTimeout(()=>{
      fetch(apiUrl)
    .then(res=>{
      console.log(res)
      return res.json()

    })
    .then(data=>{
      setBlogs(data)
      setIsLoading(false)
    })
    .catch(error=>{
      console.log("error fetching data",error)
      setIsLoading(false)
    })
    },1000)
    
  }
  )
   
     
      


    return ( 
        <div className="home">
          {isLoading?<p>Loading...</p>:
           blogs && <BlogList blogs={blogs}  title="All blogs!"/>}
        </div>
     );
}
 
export default Home;
