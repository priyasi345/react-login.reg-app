import Login from './components/login/login';
import './App.css';
import {useState} from 'react'
import Homepage from './components/homepage/homepage';
import Register from './components/register/register';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  const [user,setLoginUser]=useState({ })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage/>:<Login setLoginUser={setLoginUser}/>
            }
            
             </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/> 
            </Route>
          <Route path="/register">
            <Register/> 
            </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
