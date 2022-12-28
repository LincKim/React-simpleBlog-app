import Navbar from './navbar'
import Home from './home'

function App() {

//   const title = "Welcome to the new Blog";
//   const likes = 50;
//  // const person = { name: 'mathai', age: 22};

//   const link = "http://www.google.com"

  return (
    <div className="App">
      <Navbar/>
      <div className="content">

        <Home />
        {/* <h1> {title} </h1>
        <p>Liked {likes} times </p>

        <p>{ 10 }</p>
        <p> { 'Marvin' } </p>
        <p>{ [ 'apples ', ' mangoes ', ' avocados'] }</p>
        <p>{ Math.random() * 10 } </p>


        <a  href = {link}> Google Site </a> */}



      </div>
    </div>
  );
}

export default App;
