import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
            <h2>sorry</h2>
            <p>the page cannot be found</p>
            <Link to='/'>Back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;