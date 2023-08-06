const Navbar = () => {
    return ( 
        <div className="navbar flex border w-96 ">
            <h1>The Kb blog</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href='/' style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>NewBlog</a>
            </div>
        </div>
     );
}
 
export default Navbar;