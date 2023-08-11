import { useState } from "react";

const Create = () => {

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('mario')

    
    return (  
        <div className="create">
             <h2>Add a New Blog</h2>
             <form>
                <label>Blog title:</label>
                <input 
                type="text"
                value={title}
                onChange={(event)=>setTitle(event.target.value)}
                required
                />

                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >   
                </textarea>

                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add blog</button>
            
                <h2>{title}</h2>
                <p>{body}</p>
                <p>{author}</p>
                            

             </form>
        </div>
    );
}
 
export default Create;