import React from "react";
import "../componentStyles/MessageModel.css";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function MessageModel() {

  return (
    <div className="floatingModel messageModelContainer" >
      <ul className="messagesContainerUl">
        <li className="messageLi">
          <div className="messageHeader">
            <p className="tinyText">You have a notification</p>
            <div className="deleteSvg">
              <MdDeleteOutline />
            </div>
          </div>
          <p className="bodyText tinyText">
            please red guidlines to understand the web application{" "}
            <Link to="/guide">Helpful Guide</Link>
          </p>
        </li>
        <li className="messageLi">
          <div className="messageHeader">
            <p className="tinyText">You have a notification</p>
            <div className="deleteSvg">
              <MdDeleteOutline />
            </div>
          </div>
          <p className="bodyText tinyText">
            please red guidlines to understand the web application{" "}
            <Link to="/guide">Helpful Guide</Link>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default MessageModel;
