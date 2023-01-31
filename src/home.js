import React, {useState, useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {

    //State of blogs, allowing for change to put new and also delete

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body:'lorem ipsum...', author: 'mario', id:1},
        {title: 'Welcome party!', body:'lorem ipsum...', author: 'yoshi', id:2},
        {title: 'Web dev top tips', body:'lorem ipsum...', author: 'mario', id:3}
    ])


    const [name, setName] = useState("mario")
    const handleDelete =(id) => {

        const newBlogs = blogs.filter((blog)=>blog.id !== id)
        setBlogs(newBlogs)
    }
    //  Pass the function that will run every time there is a re-render 
    useEffect (()=>{
        console.log(name);
    }, [name])

    return (  
        <div className="home">
         {/* use the javascript.map method to cycle through the blogs and then build sth to render them to page.THe map prevenst repetition and accomodates if a new blog is added */}
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        {/* <BlogList blogs={blogs.filter ((blog)=>blog.author === 'mario')} title="Mario's Blogs"/> */}
        <button onClick={()=>{setName('Mathai')}}>change Name</button>
        <p>{name}</p>
        </div>
    );
}
 
export default Home;