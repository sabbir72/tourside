import SideBar from "../../sideBar/SideBar"
import SinglePost from "../singlePost/SinglePost"
import "./single.css"

const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
       <SideBar/>
    </div>
  )
}

export default Single