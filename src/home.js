const Home = () => {

    const handleClick = (e) =>{
        console.log('Hello Mathai', e);
    }

    const handleClickAgain = (name) =>{
        console.log(`Hello ${name}`);
    }
    return (  
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>{
                handleClickAgain('Jay', e)
            }}>Click Me again</button>
        </div>
    );
}
 
export default Home;