import "./write.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";


const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/api/posts", newPost);
          window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
     {
          file && (<img src={URL.createObjectURL(file)} alt="" className="writeImg" />)
     }
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          {/* <label htmlFor="fileInput">
              <i class="fas fa-plus"></i>
              </label>
              style={{display:"none"}} this line used next line  */}
          <input
            type="file"
            id="fileInput"
            style={{ cursor: "pointer" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell Your Story..."
            className="writeInput writeText"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
        </div>
        <button className=" writeSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Write;
