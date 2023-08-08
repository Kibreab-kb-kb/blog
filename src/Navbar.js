import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar flex border w-96 ">
            <h1>The Kb blog</h1>

            <div className="links">
                <Link to ='/'>Home</Link>
                <Link to ='/create'>NewBlog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;