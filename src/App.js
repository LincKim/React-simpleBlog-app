import Navbar from './navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

//   const title = "Welcome to the new Blog";
//   const likes = 50;
//  // const person = { name: 'mathai', age: 22};

//   const link = "http://www.google.com"

//Switch ensures that only one route shows at any particular time

  return (

  <Router>
        <div className="App">
          <Navbar/>
          <div className="content">

            <Switch>

              <Route exact path="/"> 
                <Home/>
              </Route>

              <Route exact path="/create"> 
                <Create/>
              </Route>

              <Route exact path="/blogs/:id"> 
                <BlogDetails/>
              </Route>


            </Switch>
            {/* <h1> {title} </h1>
            <p>Liked {likes} times </p>

            <p>{ 10 }</p>
            <p> { 'Marvin' } </p>
            <p>{ [ 'apples ', ' mangoes ', ' avocados'] }</p>
            <p>{ Math.random() * 10 } </p>


            <a  href = {link}> Google Site </a> */}



          </div>
        </div>

    </Router>
  );
}

export default App;
