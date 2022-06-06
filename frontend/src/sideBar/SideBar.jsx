
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sideBar.css"

const SideBar = () => {
  const [cats, setCats]=useState([]);

  useEffect (() => {
     const getCats= async () => {
       const res = await axios.get("/api/categories")
       setCats(res.data)
     }
     getCats()
  },[])
  return (
    <div className="sideBar">
       <div className="sideBarItem">
           <span className="sideBarTitle">ABOUT ME</span>
           <img className="sideBarImg" src="https://sabbir72.github.io/Mind-Fresh-Travelling/resources/img/L4.png" alt="" srcset="" />
           <p className="pera">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem perspiciatis porro eveniet, error dolor provident dicta non a veniam in fugit repudiandae suscipit accusantium maiores veritatis nostrum distinctio ipsam!</p>
       </div>
       <div className="sideBarItem">
         <span className="sideBarTitle">CATEGORIES</span>
         <ul className="sideBarList">

           {
             cats.map((c)=>(
            <Link to={`/cat=${c.name}`} className="link">
             <li className="sideBarListItem"> {c.name} </li> 
            </Link>
             
             ))}
          
         </ul> 
       </div>

       <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span> 
            <div className="sideBarSocial">
            <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="sideBarIcon fab fa-facebook-square"></i></a>
            <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="sideBarIcon fab fa-twitter-square"></i></a>
            <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="sideBarIcon fab fa-instagram-square"></i></a>
            </div>
      </div>
    </div>
  )
}

export default SideBar