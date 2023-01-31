import React, {useState, useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {

    //State of blogs, allowing for change to put new and also delete

    const [blogs, setBlogs] = useState(null)


  
  
    //  Pass the function that will run every time there is a re-render 
    useEffect (()=>{
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then((data)=>{
                // console.log(data);

                setBlogs(data)
            })
    }, [])

    return (  
        <div className="home">
         {/* use the javascript.map method to cycle through the blogs and then build sth to render them to page.THe map prevenst repetition and accomodates if a new blog is added */}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        {/* <BlogList blogs={blogs.filter ((blog)=>blog.author === 'mario')} title="Mario's Blogs"/> */}
        </div>
    );
}
 
export default Home;