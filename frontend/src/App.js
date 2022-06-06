import Single from "./pages/single/Single";
import Login from "./login/Login";
import Setting from "./pages/setting/Setting";
import Register from "./register/Register";
import TopBar from "./topBar/TopBar";
import Write from "./writeing/Write";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
const {user}=useContext(Context);
  return (
    <div className="App">
 
      <Router>
        <TopBar/>
         <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route path="/register" element={  user ? <Home/> : <Register/>} />
           <Route path="/login" element={ user ? <Home/> : <Login/>} />
           <Route path="/write" element={ user ? <Write/> : <Register/>} />
           <Route path="/setting" element={user ? <Setting/>:<Register/>} />
           <Route path="/post/:postId" element={<Single/>} />
         </Routes>

      </Router>
   
   
    
      {/* <Register/> */}

    </div>
  );
}

export default App;
