import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";
import { db } from "./firebase";
import "./App.css";
import { Button, Input } from "@mui/material";

//modal styling
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//app function
function App() {
  //consts
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState([false]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //use effect
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, [posts]);

  const signUp = (event) => {};

  //return value
  return (
    <div className="app">
      {/* modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            {/* image */}
            <img
              className="app_hearder_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIytvPppdg6BBkzSv_CkEjJn13EHILdraPWex4-d-CeI1SDyeRe4KhbH067uMLUh6LbE&usqp=CAU"
              alt=""
              height="40px"
            />

            {/* input fields */}

            <Input
              type="text"
              placeholder={"username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder={"password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Button */}
            <Button onClick={signUp}>Sign Up</Button>
          </center>
        </div>
      </Modal>

      {/* header */}
      <img
        className="app_header_image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIytvPppdg6BBkzSv_CkEjJn13EHILdraPWex4-d-CeI1SDyeRe4KhbH067uMLUh6LbE&usqp=CAU"
        alt=""
      />

      {/* posts */}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
