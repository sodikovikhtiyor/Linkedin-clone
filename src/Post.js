import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { ChatOutlined, SendOutlined, ShareOutlined } from "@mui/icons-material";
import { forwardRef } from "react";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div>
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlined} title="Share" color="gray" />
          <InputOption Icon={SendOutlined} title="Send" color="gray" />
        </div>
      </div>
    </div>
  );
});

export default Post;
