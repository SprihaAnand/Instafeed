import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function Post(props) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" alt="Spriha" src=""></Avatar>
        <h3>{props.userName}</h3>
      </div>
      <img className="post_image" src={props.imageUrl} alt="" />
      <h4 className="post_text">
        <strong>{props.userName} : </strong>
        {props.caption}
      </h4>
    </div>
  );
}

export default Post;
