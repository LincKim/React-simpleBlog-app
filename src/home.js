import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

 const {data:blogs, isPending, error} = useFetch(" http://localhost:8000/blogs")

  
  


    return (  
        <div className="home">
         {/* use the javascript.map method to cycle through the blogs and then build sth to render them to page.THe map prevenst repetition and accomodates if a new blog is added */}

            {error && <div>{error}</div>}
         {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        {/* <BlogList blogs={blogs.filter ((blog)=>blog.author === 'mario')} title="Mario's Blogs"/> */}
        </div>
    );
}
 
export default Home;