import "./home.css"
import Posts from '../../posts/Posts'
import SideBar from '../../sideBar/SideBar'
import Header from "../../header/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Home = () => {
  const[posts,setPosts]=useState([]);
  const {search} =useLocation();

  useEffect(()=>{
  const fetchPosts= async () => {
  const res = await axios.get("/api/posts"+search)
  setPosts(res.data);
  }
  fetchPosts()
  },[search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  )
}

export default Home