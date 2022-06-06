import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import SideBar from "../../sideBar/SideBar";
import "./setting.css";

const Setting = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF ="http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/api/users/" + user._id, updateUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/users/${user._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTilte">Update Your Account</span>
          <span className="settingDeleteTilte" onClick={handleDelete} >Delete Account</span>
        </div>
        <form action="" className="settingForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
              className="settingImg"
            />
            <label htmlFor="fileInput">
              <i class="settingPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => 
                setFile(e.target.files[0])
              }
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => 
              setUsername(e.target.value)
            }
          />

          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => 
              setEmail(e.target.value)
            }
          />

          <label>Password</label>
          <input
            type="password'"
            placeholder="Your Password"
            onChange={(e) => 
              setPassword(e.target.value)
            }
          />
          <button className="settingSubmit" type="submit">
            Update
          </button>
          {success && (
          <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Profile has been updated...</span>
           
         )}
         
        </form>
      </div>
     
      <SideBar />
    </div>
  );
};

export default Setting;
